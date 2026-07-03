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
    title: "Portfolio | Jordan Macia - Cybersecurity Expert | Pentester",
    description:
      "Jordan Macia - Cybersecurity Expert & Pentester. Master in Cybersecurity. Specializing in Pentesting, Red Teaming, and Ethical Hacking. Available for work-study opportunities.",
    keywords:
      "Jordan Macia, cybersecurity, pentesting, ethical hacker, red teaming, master cybersecurity, bug bounty, security audits, penetration testing",
  },
  fr: {
    htmlLang: "fr",
    locale: "fr_FR",
    label: "Français",
    title: "Portfolio | Jordan Macia - Expert Cybersécurité | Pentester",
    description:
      "Jordan Macia - Expert en Cybersécurité et Pentester. Master en Cybersécurité. Spécialisé en Pentesting, Red Teaming et Hacking Éthique. Disponible pour alternance.",
    keywords:
      "Jordan Macia, cybersécurité, pentesting, hacker éthique, red teaming, master cybersécurité, bug bounty, audits sécurité, tests de pénétration",
  },
  es: {
    htmlLang: "es",
    locale: "es_ES",
    label: "Español",
    title: "Portfolio | Jordan Macia - Experto Ciberseguridad | Pentester",
    description:
      "Jordan Macia - Experto en Ciberseguridad y Pentester. Master en Ciberseguridad. Especializado en Pentesting, Red Teaming y Hacking Ético. Disponible para alternancia.",
    keywords:
      "Jordan Macia, ciberseguridad, pentesting, hacker ético, red teaming, master ciberseguridad, bug bounty, auditorías seguridad, pruebas penetración",
  },
  ca: {
    htmlLang: "ca",
    locale: "ca_ES",
    label: "Català",
    title: "Portfolio | Jordan Macia - Expert Ciberseguretat | Pentester",
    description:
      "Jordan Macia - Expert en Ciberseguretat i Pentester. Master en Ciberseguretat. Especialitzat en Pentesting, Red Teaming i Hacking Ètic. Disponible per a alternança.",
    keywords:
      "Jordan Macia, ciberseguretat, pentesting, hacker ètic, red teaming, master ciberseguretat, bug bounty, auditories seguretat, proves penetració",
  },
};

const alternateLinks = (suffix = "") =>
  `${Object.entries(languages)
    .map(
      ([code, lang]) =>
        `<link rel="alternate" hreflang="${lang.htmlLang}" href="${baseUrl}/${code}/${suffix}" />`
    )
    .join("\n  ")}
  <link rel="alternate" hreflang="x-default" href="${baseUrl}/" />`;

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
        jobTitle: "Cybersecurity Student and Pentester",
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
        name: ["Home", "About", "Projects", "Resume"],
        url: [
          `${baseUrl}/${code}/#home`,
          `${baseUrl}/${code}/#about`,
          `${baseUrl}/${code}/#project`,
          `${baseUrl}/${code}/resume/`,
        ],
      },
    ],
  });

const buildHtml = (template, code, isResume = false) => {
  const lang = languages[code];
  const suffix = isResume ? "resume/" : "";
  const canonicalUrl = `${baseUrl}/${code}/${suffix}`;
  const robots = isResume ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  const alternates = alternateLinks(suffix);
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
  writePage([code, "resume"], buildHtml(template, code, true));
});

fs.writeFileSync(indexPath, buildHtml(template, "en"), "utf8");
writePage(["resume"], buildHtml(template, "en", true));
fs.writeFileSync(path.join(buildDir, "404.html"), template, "utf8");

console.log("Generated GitHub Pages SEO entry points for /en, /fr, /es, /ca and resume routes.");
