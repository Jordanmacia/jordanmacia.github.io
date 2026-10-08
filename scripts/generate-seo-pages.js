const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");
const baseUrl = "https://jord4n.pro";


const languages = {
  en: {
    htmlLang: "en",
    locale: "en_US",
    label: "English",
    title: "Portfolio | Jordan Macia - Pentester",
    description:
      "Explore my background, skills, projects, education, certifications and a little more about me.",
    keywords:
      "Jordan Macia, cybersecurity, pentesting, ethical hacking, projects, certifications, portfolio",
  },
  fr: {
    htmlLang: "fr",
    locale: "fr_FR",
    label: "Français",
    title: "Portfolio | Jordan Macia - Pentester",
    description:
      "Découvrez mon parcours, mes compétences, mes projets, mes études, mes certifications et un peu plus sur moi.",
    keywords:
      "Jordan Macia, cybersécurité, pentesting, hacking éthique, projets, certifications, portfolio",
  },
  es: {
    htmlLang: "es",
    locale: "es_ES",
    label: "Español",
    title: "Portfolio | Jordan Macia - Pentester",
    description:
      "Descubre mi trayectoria, habilidades, proyectos, estudios, certificaciones y un poco más sobre mí.",
    keywords:
      "Jordan Macia, ciberseguridad, pentesting, hacking ético, proyectos, certificaciones, portfolio",
  },
  ca: {
    htmlLang: "ca",
    locale: "ca_ES",
    label: "Català",
    title: "Portfolio | Jordan Macia - Pentester",
    description:
      "Descobreix la meva trajectòria, habilitats, projectes, estudis, certificacions i una mica més sobre mi.",
    keywords:
      "Jordan Macia, ciberseguretat, pentesting, hacking ètic, projectes, certificacions, portafolis",
  },
};

const alternateLinks = (suffix = "") =>
  `${Object.entries(languages)
    .map(
      ([code, lang]) =>
        `<link rel="alternate" hreflang="${lang.htmlLang}" href="${baseUrl}/${code}/${suffix}" />`
    )
    .join("\n  ")}
  <link rel="alternate" hreflang="x-default" href="${baseUrl}/en/" />`;

const metaTag = (name, content) =>
  `<meta name="${name}" content="${content.replace(/"/g, "&quot;")}" />`;

const propertyTag = (property, content) =>
  `<meta property="${property}" content="${content.replace(/"/g, "&quot;")}" />`;

const replaceOrInsert = (html, pattern, replacement) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }
  return html.replace("</head>", `  ${replacement}\n</head>`);
};

const metaNamePattern = (name) =>
  new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["'][^"']*["']\\s*\\/?>`, "i");

const metaPropertyPattern = (property) =>
  new RegExp(`<meta\\s+property=["']${property}["']\\s+content=["'][^"']*["']\\s*\\/?>`, "i");

const linkRelPattern = (rel) =>
  new RegExp(`<link\\s+rel=["']${rel}["']\\s+href=["'][^"']*["']\\s*\\/?>`, "i");

const structuredData = (code, lang, canonicalUrl) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#jordan-macia`,
        name: "Jordan Macia De Las Heras",
        url: canonicalUrl,
        jobTitle: "Pentester",
        sameAs: [
          "https://www.linkedin.com/in/jordanmacia/",
          "https://github.com/jordanmacia",
          "https://app.hackthebox.com/users/1345367",
          "https://hacking-notes.jord4n.pro/",
        ],
        knowsAbout: [
          "Cybersecurity",
          "Pentesting",
          "Ethical Hacking",
          "Red Teaming",
          "Web Security",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}#profile`,
        url: canonicalUrl,
        name: lang.title,
        description: lang.description,
        inLanguage: lang.htmlLang,
        mainEntity: { "@id": `${baseUrl}/#jordan-macia` },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${canonicalUrl}#site-navigation`,
        name: ["Experience", "Projects", "Certifications", "About"],
        url: [
          `${baseUrl}/${code}/#experience`,
          `${baseUrl}/${code}/#project`,
          `${baseUrl}/${code}/#certifications`,
          `${baseUrl}/${code}/#about`,
        ],
      },
    ],
  });

const buildHtml = (template, code) => {
  const lang = languages[code];
  const canonicalUrl = `${baseUrl}/${code}/`;
  const robots = "index, follow, noimageindex, max-image-preview:large";
  const alternates = alternateLinks();
  const otherLocales = Object.values(languages)
    .filter((language) => language.locale !== lang.locale)
    .map((language) => propertyTag("og:locale:alternate", language.locale))
    .join("\n  ");

  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang.htmlLang}">`);
  html = html.replace(/<title>.*?<\/title>/, `<title>${lang.title}</title>`);
  html = replaceOrInsert(html, metaNamePattern("description"), metaTag("description", lang.description));
  html = replaceOrInsert(html, metaNamePattern("keywords"), metaTag("keywords", lang.keywords));
  html = replaceOrInsert(html, metaNamePattern("robots"), metaTag("robots", robots));
  html = replaceOrInsert(html, metaNamePattern("language"), metaTag("language", lang.label));
  html = replaceOrInsert(html, metaPropertyPattern("og:url"), propertyTag("og:url", canonicalUrl));
  html = replaceOrInsert(html, metaPropertyPattern("og:title"), propertyTag("og:title", lang.title));
  html = replaceOrInsert(html, metaPropertyPattern("og:description"), propertyTag("og:description", lang.description));
  html = replaceOrInsert(html, metaPropertyPattern("og:locale"), propertyTag("og:locale", lang.locale));
  html = html.replace(/\s*<meta\s+property=["']og:locale:alternate["']\s+content=["'][^"']*["']\s*\/?>/gi, "");
  html = html.replace("</title>", `</title>\n  ${otherLocales}`);
  html = replaceOrInsert(html, linkRelPattern("canonical"), `<link rel="canonical" href="${canonicalUrl}" />`);
  html = html.replace(/\s*<link\s+rel=["']alternate["']\s+hreflang=["'][^"']*["']\s+href=["'][^"']*["']\s*\/?>/gi, "");
  html = html.replace("</title>", `</title>\n  ${alternates}`);
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${structuredData(code, lang, canonicalUrl)}</script>`
  );

  return html;
};

const writePage = (segments, html) => {
  const dir = path.join(buildDir, ...segments);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
};

if (!fs.existsSync(indexPath)) {
  throw new Error("build/index.html not found. Run this script after react-scripts build.");
}

const template = fs.readFileSync(indexPath, "utf8");

Object.keys(languages).forEach((code) => {
  writePage([code], buildHtml(template, code));
});

// GitHub Pages is static: an immediate meta refresh supplies a permanent
// canonicalization signal without relying on React or JavaScript rendering.
// The optional script preserves incoming query strings and section anchors.
const rootRedirect = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Jordan Macia - Pentester</title>
  <link rel="canonical" href="${baseUrl}/en/" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
  <script>window.location.replace('/en/' + window.location.search + window.location.hash);</script>
  <meta http-equiv="refresh" content="0; url=${baseUrl}/en/" />
</head>
<body>
  <p>This page has moved to <a href="${baseUrl}/en/">Jordan Macia’s portfolio</a>.</p>
</body>
</html>
`;
fs.writeFileSync(indexPath, rootRedirect, "utf8");
fs.writeFileSync(path.join(buildDir, "404.html"), template, "utf8");

console.log("Generated GitHub Pages SEO entry points for /en, /fr, /es and /ca.");
