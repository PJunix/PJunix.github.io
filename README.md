# PJunix — Cybersecurity Portfolio & Research Site

A lightweight, static GitHub Pages site for documenting security learning, controlled labs, and research notes. It uses semantic HTML, modern CSS, and a small vanilla JavaScript file—no build step or runtime dependencies.

## Structure

```text
index.html              Home
about.html              Learning approach and focus
writeups.html           Top-level research index
projects.html           Labs and projects
contact.html            Profile/contact placeholders
writeups/index.html     Directory-form writeup index
assets/css/style.css    Shared responsive theme
assets/js/main.js       Accessible mobile navigation
```

## Local testing

Open `index.html` directly in a browser, or serve the repository with a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Check desktop and mobile widths, page navigation, keyboard focus, and the mobile menu.

## Adding a writeup

1. Add an HTML article in `writeups/`, such as `writeups/sql-injection-basics.html`.
2. Use `../assets/css/style.css` and `../assets/js/main.js` from an article inside that directory.
3. Copy the shared header/footer structure and adjust links using `../` paths.
4. Add a card to `writeups.html` and `writeups/index.html` only when the article is ready to publish.
5. Keep content scoped to authorized, educational research and avoid unsupported claims.

## Updating projects and contact links

Edit the project articles in `projects.html`. Replace the clearly marked LinkedIn and email placeholders in `contact.html` only with details intended for public release. The GitHub link is `https://github.com/PJunix`.

## Theme

Theme values live at the top of `assets/css/style.css` as CSS custom properties. Adjust colors, typography, or content width there to preserve consistent visual language across all pages.

## GitHub Pages deployment

Because this is the `PJunix.github.io` repository, GitHub Pages can publish from the repository root on the default publishing branch. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, and select the appropriate branch and `/ (root)` folder if Pages is not already enabled. No build command is required. Relative internal paths keep the site compatible with direct file opening and GitHub Pages.
