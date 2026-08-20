# Website Hebamme Katharina Köster

Static one-page website for a Hamburg midwife, served at
[www.katharinakoester.de](https://www.katharinakoester.de).

Plain HTML, CSS and a little vanilla JavaScript on top of Bootstrap 5.
No build step, no Node, no dependencies to install.

## 📁 What is where

Everything that gets published lives in `public/` — that directory *is* the website.

```
public/
  index.html        the whole page (German copy is inline in the HTML)
  impressum.html    legal notice
  css/style.css     all styling
  js/site.js        sticky header + active nav highlighting
  img/              photos, logo, background effect
  CNAME             the custom domain
```

Bootstrap, Font Awesome and the Inter webfont are loaded from CDNs — see the
`<link>` tags in the `<head>` of each page.

## ✏️ Making changes

Open the file and edit it. To preview locally:

```
python3 -m http.server -d public 8080
```

then visit <http://localhost:8080>.

## 🚀 Deploying

Push to `main`. The GitHub Actions workflow in `.github/workflows/deployment.yaml`
uploads `public/` to GitHub Pages — usually live within a minute.

Changes outside `public/` don't trigger a deploy; use the workflow's
"Run workflow" button on the Actions tab if you need one anyway.
