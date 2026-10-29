// =========================================================
// Invio del form "Contattami" con EmailJS (https://www.emailjs.com)
// È l'unico JavaScript del sito: il resto è solo HTML e CSS.
//
// Chiavi dell'account EmailJS (Account → Public Key,
// Email Services → Service ID, Email Templates → Template ID).
// La Public Key è pensata per stare nel codice pubblico.
// =========================================================

const EMAILJS_PUBLIC_KEY = "nJKF8MDtxZZCPOiQA";
const EMAILJS_SERVICE_ID = "service_qtt7gmk";
const EMAILJS_TEMPLATE_ID = "template_jijz22c";

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
