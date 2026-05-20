export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
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

export async function submitContactForm(payload: ContactFormPayload) {
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

  await new Promise<void>((resolve, reject) => {
    const cleanup = () => {
      form.remove();
      iframe.remove();
    };

    const cleanupTimeout = window.setTimeout(cleanup, 10000);

    try {
      form.submit();
      window.setTimeout(() => {
        window.clearTimeout(cleanupTimeout);
        cleanup();
        resolve();
      }, 1200);
    } catch {
      window.clearTimeout(cleanupTimeout);
      cleanup();
      reject(new Error(`Contact form submission failed. Please try again or email ${CONTACT_EMAIL} directly.`));
    }
  });
}
