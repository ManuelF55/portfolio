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
img/               immagini
favicon/           favicon e icone per telefono
```

## Convenzioni

- Nomi delle classi in inglese, secondo BEM: `blocco__elemento--variante` (es. `project-card__media`, `button--outline`). Nessun nome coincide con le classi di Bootstrap.
- Bootstrap si usa solo per la griglia (`row`, `col-*`) e il reset; tutto il resto è in Sass.
- I colori di sfondo delle card e le proporzioni dei titoli dei progetti sono nella mappa `$projects` di `_variables.scss`: per aggiungere un progetto basta una riga.
- Le immagini hanno sempre `width` e `height` nell'HTML, così non vengono deformate e la pagina non "salta" durante il caricamento.
- Nessun JavaScript e nessun `!important`.

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
- In `contatti.html` sostituisci `IL-TUO-ID` con il codice del tuo form [Formspree](https://formspree.io), così i messaggi arrivano alla tua email.
- Aggiorna il link a Behance con il tuo profilo (LinkedIn è già collegato).
- Collega i bottoni "Vedi il progetto completo" di Lamon Calling e Forma (ora puntano a `#`).
- Sostituisci le immagini temporanee in `img/placeholder/` con gli screenshot veri.

## Requisiti del corso

- Solo HTML e CSS (il menu mobile funziona con una checkbox, senza JavaScript)
- Più pagine, con CV in HTML (`about.html`) e pagina contatti con form e campi `required`
- Bootstrap 5.3 (griglia `row` / `col-lg-*` e reset)
- Sass
- Favicon
- Menu sticky
- Layout in Flexbox e griglia Bootstrap
- Responsive da 320px in su
- Tag Open Graph
- Nessuna email o telefono in chiaro
