export const BASE_URL = "https://jord4n.pro";

export const LANGUAGE_ROUTES = {
  en: { i18nCode: "en", htmlLang: "en", locale: "en_US", label: "English" },
  fr: { i18nCode: "fr", htmlLang: "fr", locale: "fr_FR", label: "Français" },
  es: { i18nCode: "es", htmlLang: "es", locale: "es_ES", label: "Español" },
  ca: { i18nCode: "ad", htmlLang: "ca", locale: "ca_ES", label: "Català" },
};

export const I18N_TO_ROUTE = Object.fromEntries(
  Object.entries(LANGUAGE_ROUTES).map(([routeCode, config]) => [
    config.i18nCode,
    routeCode,
  ])
);

export const DEFAULT_ROUTE_LANG = "en";

export const HOME_SECTION_IDS = ["experience", "project", "certifications", "about"];

export const getRouteLangFromPath = (pathname = "/") => {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return LANGUAGE_ROUTES[firstSegment] ? firstSegment : null;
};

export const getCurrentRouteLang = (i18nCode = DEFAULT_ROUTE_LANG) =>
  I18N_TO_ROUTE[i18nCode] || DEFAULT_ROUTE_LANG;

export const getLanguagePath = (routeLang, pathname = "/") => {
  const cleanLang = LANGUAGE_ROUTES[routeLang] ? routeLang : DEFAULT_ROUTE_LANG;
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] && LANGUAGE_ROUTES[segments[0]]) {
    segments[0] = cleanLang;
  } else {
    segments.unshift(cleanLang);
  }

  return `/${segments.join("/")}/`;
};

export const getHomeUrl = (routeLang = DEFAULT_ROUTE_LANG, hash = "") =>
  `${BASE_URL}/${routeLang}/${hash}`;
