# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

German-language one-page marketing site for a Hamburg midwife ("Hebamme Katharina Köster"),
deployed to GitHub Pages at `www.katharinakoester.de`.

**Static HTML. There is no build step, no `package.json`, no `node_modules`, no framework.**
It was a Create React App project until August 2026; if you find a reference to React,
`npm run build`, SCSS partials or `src/`, it is stale — none of that exists anymore.

## Commands

```bash
python3 -m http.server -d public 8080   # preview at http://localhost:8080
```

That is the whole toolchain. There is nothing to install, no tests, no linter.

## Layout

`public/` is the website. Everything in it is published verbatim; nothing outside it is.

```
public/
  index.html        the entire page
  impressum.html    legal notice (linked from the footer)
  css/style.css     all styling
  js/site.js        sticky header + active nav
  img/              images
  CNAME  favicon.ico  favicon.png  robots.txt
```

## Deployment

`.github/workflows/deployment.yaml` uploads `public/` to Pages on every push to `main`
that touches `public/**` or the workflow itself. No build, no Node. Changes elsewhere
(`README.md`, `CLAUDE.md`, `template/`) do **not** trigger a deploy — use `workflow_dispatch`.

The custom domain comes from `public/CNAME`, which is inside the uploaded directory.

## Content

**All German copy is hardcoded inline in `public/index.html`.** No CMS, no data files,
no i18n. To change text, edit the HTML. Sections in document order:

| `id` | Content |
|---|---|
| `home` | headline, intro paragraph, portrait, "Kontakt" button |
| `about` | biography |
| `services` | the three service cards (Schwangerschaft, Wochenbett, Kinesiotaping) |
| `contactus` | email, phone, service area (Winterhude/Barmbek/Uhlenhorst), coverage map |

Note: "Kinesiotatping" in the third service card is a typo that predates the conversion.
It was preserved deliberately — fix it only if asked.

## Styling

`public/css/style.css` is the single stylesheet and the source of truth — edit it directly.
It was compiled once from the purchased "Zemo Personal Portfolio" SCSS theme with the dead
rules stripped, and is no longer generated from anything.

Bootstrap 5.3.6, Font Awesome 6.7.2 and the Inter webfont load from CDNs via `<link>` tags.
**Order matters**: vendor CSS first, `css/style.css` last, so project rules win at equal
specificity. Bootstrap grid and utility classes are used directly in the markup.

Brand colors are CSS custom properties at the top of `style.css` (`--px-theme: #e4032d`).

> The Inter font is loaded from `fonts.googleapis.com`. For a German site this carries a
> known data-protection exposure (LG München, 2022). Self-hosting the `woff2` files would
> remove it and is isolated to two `<link>` tags.

## JavaScript

Two scripts, both at the bottom of `<body>`:

- `bootstrap.bundle.min.js` from the CDN — drives the mobile burger menu via the
  `data-bs-toggle="collapse"` attributes on the toggler. Nothing else uses it.
- `js/site.js` — ~25 lines: adds `body.fixed-header` past 100px of scroll, and `.active`
  to the nav item whose section is in view.

`site.js` matches a nav link's `data-scroll-nav` against a section's `data-scroll-data`.
**The numbering is 0, 1, 2, 5** — 3 and 4 were Portfolio and Blog, removed from the page.
Keep the two attributes in sync when adding or reordering sections.

In-page navigation is plain `href="#section"` anchors plus `scroll-behavior: smooth` in CSS.

## Images

In `public/img/`, referenced with document-relative paths (`src="img/katharina-home.webp"`).
Live images are `.webp`; there is no `<picture>`/srcset and no image pipeline.
`img/dots-effect-dark.webp` is referenced from `style.css`, not from the HTML.

Several files in `public/img/` are unreferenced leftovers from the purchased theme
(`blog-*.jpg`, `portfolio-*.jpg`, `team-*.jpg`) plus unused `.png`/`.jpg` originals of the
live `.webp` images. They are published but never requested. Safe to delete; ask first.

## Known cruft — don't mistake it for a pattern

- `template/` is the untouched purchased theme plus logo source files (`.ai`/`.pdf`) and a
  Word doc. Reference material; not published, not imported.
- `public/.DS_Store` and `public/img/.DS_Store` are committed and get published.
- `public/robots.txt` is the old Create React App allow-all default; there is no `sitemap.xml`.
