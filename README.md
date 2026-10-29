# Portfolio — Manuel Facen

Sito personale di Manuel Facen, UX/UI designer. Progetto per il corso Start2Impact: HTML, CSS con Sass, Bootstrap e pubblicazione su GitHub Pages.

## Pagine

| File | Pagina |
|---|---|
| `index.html` | Home: presentazione e progetti |
| `about.html` | About / CV |
| `contatti.html` | Contattami, con il form |
| `progetto-ecodream.html` | Progetto Ecodream |
| `progetto-lamon-calling.html` | Progetto Lamon Calling |
| `progetto-forma.html` | Progetto Forma |

## Struttura

```
css/style.css      CSS compilato (non modificarlo a mano)
scss/              file Sass da modificare
  _variables.scss  colori, font, spazi, raggi e dati dei progetti
  _base.scss       impostazioni generali, contenitore e classi di testo
  _buttons.scss    bottoni e tag
  _header.scss     header sticky e menu mobile (solo CSS)
  _home.scss       Home
  _project.scss    pagine progetto
  _about.scss      About / CV
  _contact.scss    Contatti e form
  _footer.scss     chiusura e footer
  style.scss       unisce tutti i file
js/contact.js      invio del form con EmailJS
img/               immagini
favicon/           favicon e icone per telefono
```

## Convenzioni

- Nomi delle classi in inglese, secondo BEM: `blocco__elemento--variante` (es. `project-card__media`, `button--outline`). Nessun nome coincide con le classi di Bootstrap.
- Bootstrap si usa solo per la griglia (`row`, `col-*`) e il reset; tutto il resto è in Sass.
- I colori di sfondo delle card e le proporzioni dei titoli dei progetti sono nella mappa `$projects` di `_variables.scss`: per aggiungere un progetto basta una riga.
- Le immagini hanno sempre `width` e `height` nell'HTML, così non vengono deformate e la pagina non "salta" durante il caricamento.
- Nessun `!important`. L'unico JavaScript è `js/contact.js`, per l'invio del form con EmailJS (suggerito dalla consegna); il menu mobile è solo CSS.

## Aggiungere un progetto

1. Duplica una pagina progetto (es. `progetto-forma.html`) e cambia testi e immagini.
2. Aggiungi il progetto alla mappa `$projects` in `scss/_variables.scss` e ricompila.
3. Aggiungi la card in `index.html` e aggiorna i link "Progetto precedente / Prossimo progetto".

## Modificare lo stile

Modifica i file in `scss/`, poi ricompila il CSS dal Terminale, dentro la cartella del progetto:

```bash
./tools/dart-sass/sass scss/style.scss css/style.css --no-source-map
```

Per ricompilare in automatico a ogni salvataggio:

```bash
./tools/dart-sass/sass --watch scss/style.scss css/style.css --no-source-map
```

La cartella `tools/` contiene il compilatore Dart Sass e non va caricata su GitHub (è già esclusa in `.gitignore`).

## Prima della pubblicazione

- L'indirizzo del sito nei tag Open Graph è `https://manuelf55.github.io/portfolio/`: se chiami il repository in un altro modo, aggiornalo in tutte le pagine.
- In `js/contact.js` inserisci Public Key, Service ID e Template ID del tuo account [EmailJS](https://www.emailjs.com), così i messaggi del form arrivano alla tua email (istruzioni sotto).
- Aggiorna il link a Behance con il tuo profilo (LinkedIn è già collegato).
- Collega i bottoni "Vedi il progetto completo" di Lamon Calling e Forma (ora puntano a `#`).
- Sostituisci le immagini temporanee in `img/placeholder/` con gli screenshot veri.

## Collegare il form a EmailJS

1. Crea un account gratuito su [emailjs.com](https://www.emailjs.com).
2. **Email Services → Add New Service**: collega la tua casella email (es. Gmail) e copia il **Service ID**.
3. **Email Templates → Create New Template**: nel testo usa le variabili dei campi del form, `{{nome}}`, `{{email}}`, `{{azienda}}`, `{{messaggio}}`. In "Reply To" metti `{{email}}`, così puoi rispondere direttamente. Salva e copia il **Template ID**.
4. **Account → General**: copia la **Public Key**.
5. Incolla i tre valori in cima a `js/contact.js`.
6. In **Account → Security** aggiungi `https://manuelf55.github.io` tra i domini autorizzati, così il form funziona solo dal tuo sito.

## Requisiti del corso

- HTML e CSS (il menu mobile funziona con una checkbox, senza JavaScript); JavaScript solo per l'invio del form con EmailJS, esercitazione facoltativa della consegna
- Più pagine, con CV in HTML (`about.html`) e pagina contatti con form e campi `required`
- Bootstrap 5.3 (griglia `row` / `col-lg-*` e reset)
- Sass
- Favicon
- Menu sticky
- Layout in Flexbox e griglia Bootstrap
- Responsive da 320px in su
- Tag Open Graph
- Nessuna email o telefono in chiaro
