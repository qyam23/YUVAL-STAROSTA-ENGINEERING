export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactSubmissionResult = {
  delivery: "formsubmit" | "email_client";
};

const CONTACT_EMAIL = "starosta.ing@gmail.com";
const FORMSUBMIT_TOKEN = "0523cca1d66f8f5aefffd5f3270b1550";
const ENDPOINT = `https://formsubmit.co/${FORMSUBMIT_TOKEN}`;

function appendHiddenInput(form: HTMLFormElement, name: string, value: string) {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

function buildMailtoUrl(payload: ContactFormPayload) {
  const subject = "New contact request from starostaindustrial.com";
  const body = [
    `First name: ${payload.firstName}`,
    `Last name: ${payload.lastName}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    "",
    "Message / Notes:",
    payload.message,
    "",
    "Website source: starostaindustrial.com",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitContactForm(payload: ContactFormPayload): Promise<ContactSubmissionResult> {
  const iframeName = `formsubmit_contact_${Date.now()}`;
  const iframe = document.createElement("iframe");
  iframe.name = iframeName;
  iframe.style.display = "none";
  iframe.setAttribute("aria-hidden", "true");

  const form = document.createElement("form");
  form.method = "POST";
  form.action = ENDPOINT;
  form.target = iframeName;
  form.style.display = "none";

  appendHiddenInput(form, "First name", payload.firstName);
  appendHiddenInput(form, "Last name", payload.lastName);
  appendHiddenInput(form, "Phone", payload.phone);
  appendHiddenInput(form, "Email", payload.email);
  appendHiddenInput(form, "Message / Notes", payload.message);
  appendHiddenInput(form, "Website source", "starostaindustrial.com");
  appendHiddenInput(form, "_subject", "New contact request from starostaindustrial.com");
  appendHiddenInput(form, "_template", "table");
  appendHiddenInput(form, "_captcha", "false");

  document.body.appendChild(iframe);
  document.body.appendChild(form);

  return new Promise<ContactSubmissionResult>((resolve, reject) => {
    let settled = false;

    const cleanup = () => {
      form.remove();
      iframe.remove();
    };

    const finish = (result: ContactSubmissionResult) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(fallbackTimeout);
      window.clearTimeout(cleanupTimeout);
      iframe.removeEventListener("load", handleLoad);
      cleanup();
      resolve(result);
    };

    const handleLoad = () => {
      finish({ delivery: "formsubmit" });
    };

    const fallbackTimeout = window.setTimeout(() => {
      window.location.href = buildMailtoUrl(payload);
      finish({ delivery: "email_client" });
    }, 4000);

    const cleanupTimeout = window.setTimeout(cleanup, 12000);

    try {
      iframe.addEventListener("load", handleLoad);
      form.submit();
    } catch {
      settled = true;
      window.clearTimeout(fallbackTimeout);
      window.clearTimeout(cleanupTimeout);
      iframe.removeEventListener("load", handleLoad);
      cleanup();
      reject(new Error(`Contact form submission failed. Please try again or email ${CONTACT_EMAIL} directly.`));
    }
  });
}
