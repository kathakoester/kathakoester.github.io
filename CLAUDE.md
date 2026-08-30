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

**Do not benchmark against that server.** It sends no `content-encoding: gzip` and no
`cache-control`, so Lighthouse sees Bootstrap as 232 KB instead of the 31 KB GitHub Pages
actually serves. That alone costs ~12 points of Performance and invents render-blocking and
caching "problems" that do not exist in production. Measure against
`https://www.katharinakoester.de/`, or against a local server that gzips and sends
`cache-control: max-age=600`.

## Layout

`public/` is the website. Everything in it is published verbatim; nothing outside it is.

```
public/
  index.html        the entire page
  impressum.html    legal notice (linked from the footer)
  css/style.css     all styling
  js/site.js        sticky header + active nav
  img/              images
  fonts/            self-hosted Inter (woff2)
  vendor/bootstrap/ vendored Bootstrap 5.3.6 CSS + JS bundle
  CNAME  favicon.ico  favicon.png  robots.txt  sitemap.xml
```

**The site loads nothing from a third-party origin.** No CDN, no Google Fonts. Keep it that
way: vendor new dependencies into `public/vendor/` rather than linking them.

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
| `home` | eyebrow, `h1`, subtitle, intro paragraph, portrait, "Kontakt" button |
| `about` | biography |
| `services` | the three service cards (Schwangerschaft, Wochenbett, Kinesiotaping) |
| `contactus` | email, phone, service area (Winterhude/Barmbek/Uhlenhorst), coverage map |

Note: "Kinesiotatping" in the third service card is a typo that predates the conversion.
It was preserved deliberately — fix it only if asked.

The `<title>`, meta description, Open Graph/Twitter tags and the JSON-LD block at the end of
`<head>` all restate the same copy. **Change one, change the others** — they are hand-kept in
sync, there is no template. The JSON-LD is a `@graph` of `WebSite`, `WebPage`, `Place`,
`Midwife`/`LocalBusiness` and `Person` nodes cross-referenced by `@id`; the business address
and phone number are the same ones the Impressum is legally required to carry.

Headings are a strict outline: one `h1`, `h2` per section, `h3` for subsections. The hero
eyebrow is a `p.hero-eyebrow`, deliberately *not* an `h6` — a heading above the `h1` breaks
the outline.

## Styling

`public/css/style.css` is the single stylesheet and the source of truth — edit it directly.
It was compiled once from the purchased "Zemo Personal Portfolio" SCSS theme with the dead
rules stripped, and is no longer generated from anything.

Bootstrap 5.3.6 is vendored in `public/vendor/bootstrap/`; Inter is self-hosted from
`public/fonts/` via `@font-face` at the top of `style.css` (variable, `wght 400 700`, latin +
latin-ext, `font-display: swap`). **Order matters**: Bootstrap CSS first, `css/style.css`
last, so project rules win at equal specificity. Bootstrap grid and utility classes — plus
`.visually-hidden-focusable` for the skip link and `.ratio` for the map — are used directly
in the markup.

Brand colors are CSS custom properties at the top of `style.css` (`--px-theme: #e4032d`).
`--px-theme-inverse` (`#f3a9cb`) is only 1.85:1 on white; the hero `h1` uses
`--px-heading-accent` (`#c2185b`, 5.9:1) instead. Don't put the pale pink back on text.

Because `<img>` tags now carry `width`/`height` (for CLS), any rule that constrains one axis
must free the other — the base `img` rule sets `height: auto`, and `.logo` /
`.contact-logo img` set `width: auto` alongside their `max-height`. Drop those and the
images stretch.

Bootstrap ships ~96% unused CSS (~29 KB). Subsetting it would be the last remaining
performance win, but it would reintroduce a build step — left intact on purpose.

## JavaScript

Two scripts, both `defer`, at the bottom of `<body>` on `index.html` only:

- `vendor/bootstrap/bootstrap.bundle.min.js` — drives the mobile burger menu via the
  `data-bs-toggle="collapse"` attributes on the toggler. Nothing else uses it, and
  `impressum.html` has no toggler, so that page loads no JavaScript at all.
- `js/site.js` — ~25 lines: adds `body.fixed-header` past 100px of scroll, and `.active`
  to the nav item whose section is in view.

`site.js` matches a nav link's `data-scroll-nav` against a section's `data-scroll-data`.
**The numbering is 0, 1, 2, 5** — 3 and 4 were Portfolio and Blog, removed from the page.
Keep the two attributes in sync when adding or reordering sections.

In-page navigation is plain `href="#section"` anchors plus `scroll-behavior: smooth` in CSS.

## Images

In `public/img/`, referenced with document-relative paths (`src="img/katharina-home.webp"`).
Live images are `.webp`; there is no `<picture>`/srcset and no image pipeline. Every `<img>`
carries `width`/`height`; everything below the fold also carries `loading="lazy"`, and the
hero portrait carries `fetchpriority="high"` and is `<link rel="preload">`ed from `<head>`.

`img/og-image.jpg` is the 1200x630 social card, composed from `katharina-home-neu.jpg`. It is
referenced only by the `og:image`/`twitter:image` tags, never rendered on the page.

The remaining `.png`/`.jpg` files are the unused full-size originals of the live `.webp`
images, kept as sources. The theme leftovers (`blog-*`, `portfolio-*`, `team-*`, banner
assets) were deleted in August 2026.

## Known cruft — don't mistake it for a pattern

- `template/` is the untouched purchased theme plus logo source files (`.ai`/`.pdf`) and a
  Word doc. Reference material; not published, not imported.
- `impressum.html` is deliberately `noindex,follow`, so its Lighthouse SEO score is ~69.
  That is intentional, not a regression. It still carries five affiliate links injected by the
  Impressum generator, now `rel="nofollow noopener"`.
- `robots.txt` allows everything and points at `sitemap.xml`, which lists only `/` — the
  Impressum is `noindex` and would raise a Search Console warning if listed.
- GitHub Pages hard-codes `cache-control: max-age=600` and offers no way to change it, so
  Lighthouse's "Use efficient cache lifetimes" audit can never pass. Don't chase it.
