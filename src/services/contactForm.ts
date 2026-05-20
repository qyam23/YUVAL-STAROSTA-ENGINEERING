export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

const FORMSUBMIT_TOKEN = "0523cca1d66f8f5aefffd5f3270b1550";
const ENDPOINT = `https://formsubmit.co/${FORMSUBMIT_TOKEN}`;

export async function submitContactForm(payload: ContactFormPayload) {
  const formData = new FormData();
  formData.append("First name", payload.firstName);
  formData.append("Last name", payload.lastName);
  formData.append("Phone", payload.phone);
  formData.append("Email", payload.email);
  formData.append("Message / Notes", payload.message);
  formData.append("Website source", "starostaindustrial.com");
  formData.append("_subject", "New contact request from starostaindustrial.com");
  formData.append("_template", "table");
  formData.append("_captcha", "false");

  await fetch(ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}
