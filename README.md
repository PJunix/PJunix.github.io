# PJunix

Personal cybersecurity portfolio and research notebook. It is a small static site for sharing lab work, writeups, and projects as they are ready to publish.

There is no framework or build step: the site is ordinary HTML, CSS, and a little JavaScript. That keeps it easy to edit and works well with GitHub Pages.

## Where things live

- `index.html` — home page
- `about.html`, `projects.html`, `contact.html` — main pages
- `writeups.html` — writeup list
- `writeups/` — future writeup pages
- `assets/css/style.css` — the shared look and layout
- `assets/js/main.js` — mobile menu behavior

## Editing the site

Most content changes are just edits to the matching HTML page. Project cards live in `projects.html`; writeup cards live in `writeups.html`; public profile links live in `contact.html`.

The colors and typography are collected at the top of `assets/css/style.css`. Change the variables there instead of hunting through every page.

To add a writeup, add a new file in `writeups/` (for example, `writeups/linux-enumeration.html`), copy the page header and footer from `writeups/index.html`, then add a link to it from `writeups.html`. Files inside `writeups/` need `../assets/...` paths for shared CSS and JavaScript.

## Previewing locally

Opening `index.html` in a browser works. For a closer match to GitHub Pages, run this from the repository folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publishing

GitHub Pages serves this repository directly; no build command is needed. In the repository's **Settings → Pages**, deploy from the `main` branch and the `/ (root)` folder. The public site is expected at `https://pjunix.github.io`.
