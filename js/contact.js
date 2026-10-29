// =========================================================
// Invio del form "Contattami" con EmailJS (https://www.emailjs.com)
// È l'unico JavaScript del sito: il resto è solo HTML e CSS.
//
// TODO: sostituire i tre valori con quelli del proprio account EmailJS
// (Account → Public Key, Email Services → Service ID,
//  Email Templates → Template ID).
// =========================================================

const EMAILJS_PUBLIC_KEY = "LA-TUA-PUBLIC-KEY";
const EMAILJS_SERVICE_ID = "IL-TUO-SERVICE-ID";
const EMAILJS_TEMPLATE_ID = "IL-TUO-TEMPLATE-ID";

const form = document.querySelector(".contact-form");
const status = document.querySelector(".form-status");
const button = form.querySelector('button[type="submit"]');

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// L'evento "submit" parte solo se i campi "required" sono compilati:
// il controllo lo fa già il browser.
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  button.disabled = true;
  status.textContent = "Invio in corso…";

  try {
    await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
    form.reset();
    status.textContent = "Grazie! Il messaggio è stato inviato, ti risponderò al più presto.";
  } catch (error) {
    status.textContent = "Il messaggio non è stato inviato. Riprova tra poco oppure scrivimi su LinkedIn.";
  } finally {
    button.disabled = false;
  }
});
