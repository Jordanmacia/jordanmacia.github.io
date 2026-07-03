# Pentester Portfolio - React Source Code

![Portfolio preview](https://github.com/user-attachments/assets/500f0979-e03b-4fa2-a315-11041735feba)

[![GitHub repo size](https://img.shields.io/github/repo-size/Jordanmacia/jordanmacia.github.io?logo=github)](https://github.com/Jordanmacia/jordanmacia.github.io)
[![GitHub last commit](https://img.shields.io/github/last-commit/Jordanmacia/jordanmacia.github.io)](https://github.com/Jordanmacia/jordanmacia.github.io/commits/main)

Live demo: **https://jord4n.pro**

A responsive, multilingual portfolio showcasing my studies, projects, skills, and resume as a **cybersecurity Pentester**. Built with **React 17** and deployed to **GitHub Pages** with SEO-friendly static entry points for each language.

The app keeps the React single-page experience while generating real GitHub Pages-compatible routes:

```text
https://jord4n.pro/
https://jord4n.pro/en/
https://jord4n.pro/fr/
https://jord4n.pro/es/
https://jord4n.pro/ca/
```

## Project Structure

```text
├── public/                 # static assets, base index.html, sitemap, robots, hreflang
├── scripts/
│   └── generate-seo-pages.js
│                            # creates GitHub Pages entry points after build
├── src/
│   ├── Assets/              # images, Lottie JSONs, PDF resume
│   ├── components/
│   │   ├── Home/            # hero, about, projects, tech stack
│   │   ├── Resume/          # resume view
│   │   ├── Navbar.js        # sticky header with language-aware links
│   │   ├── SEOHead.js       # canonical, hreflang, Open Graph, JSON-LD
│   │   ├── LanguageSelector.js
│   │   └── ...
│   ├── style/               # component styles
│   ├── seoConfig.js         # domain, language routes, SEO constants
│   ├── i18n.js              # translation configuration
│   └── App.js / index.js
└── package.json
```

## SEO And GitHub Pages

GitHub Pages returns a 404 when a direct URL does not exist as a real file. To keep clean language URLs without breaking direct access, the production build creates static `index.html` files for each route:

```text
build/en/index.html
build/fr/index.html
build/es/index.html
build/ca/index.html
build/en/resume/index.html
build/fr/resume/index.html
build/es/resume/index.html
build/ca/resume/index.html
```

The generated pages include:

- language-specific `html lang`
- canonical URLs
- `hreflang` alternates
- Open Graph locale metadata
- JSON-LD `Person`, `ProfilePage`, and `SiteNavigationElement`
- sitemap and robots support

`/resume` remains marked as `noindex`.

## Installation

```bash
git clone https://github.com/Jordanmacia/jordanmacia.github.io
cd jordanmacia.github.io
npm install
npm start
```

Local development runs at:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

This runs:

```bash
react-scripts build && node scripts/generate-seo-pages.js
```

The output is ready for GitHub Pages and includes the multilingual static entry points.

## Deploy

```bash
npm run deploy
```

The deployment publishes the generated `build/` folder to the `gh-pages` branch.

## Contact

[![Email](https://img.shields.io/badge/email-jordanmacia@protonmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jordanmacia@protonmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jordan%20Macia-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/jordanmacia)
[![Hack The Box](https://img.shields.io/badge/Hack%20The%20Box-Profile-9F2B68?style=for-the-badge&logo=hackthebox&logoColor=white)](https://app.hackthebox.com/users/1345367)
