import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  BASE_URL,
  DEFAULT_ROUTE_LANG,
  getCurrentRouteLang,
  getRouteLangFromPath,
  HOME_SECTION_IDS,
  LANGUAGE_ROUTES,
} from '../seoConfig';

const translations = {
  en: {
    title: 'Portfolio | Jordan Macia - Cybersecurity Expert | Pentester',
    description: 'Jordan Macia - Cybersecurity Expert & Pentester. Master in Cybersecurity. Specializing in Pentesting, Red Teaming, and Ethical Hacking. Available for work-study opportunities.',
    keywords: 'Jordan Macia, cybersecurity, pentesting, ethical hacker, red teaming, master cybersecurity, bug bounty, security audits, penetration testing'
  },
  fr: {
    title: 'Portfolio | Jordan Macia - Expert Cybersécurité | Pentester',
    description: 'Jordan Macia - Expert en Cybersécurité et Pentester. Master en Cybersécurité. Spécialisé en Pentesting, Red Teaming et Hacking Éthique. Disponible pour alternance.',
    keywords: 'Jordan Macia, cybersécurité, pentesting, hacker éthique, red teaming, master cybersécurité, bug bounty, audits sécurité, tests de pénétration'
  },
  es: {
    title: 'Portfolio | Jordan Macia - Experto Ciberseguridad | Pentester',
    description: 'Jordan Macia - Experto en Ciberseguridad y Pentester. Master en Ciberseguridad. Especializado en Pentesting, Red Teaming y Hacking Ético. Disponible para alternancia.',
    keywords: 'Jordan Macia, ciberseguridad, pentesting, hacker ético, red teaming, master ciberseguridad, bug bounty, auditorías seguridad, pruebas penetración'
  },
  ad: {
    title: 'Portfolio | Jordan Macia - Expert Ciberseguretat | Pentester',
    description: 'Jordan Macia - Expert en Ciberseguretat i Pentester. Master en Ciberseguretat. Especialitzat en Pentesting, Red Teaming i Hacking Ètic. Disponible per a alternança.',
    keywords: 'Jordan Macia, ciberseguretat, pentesting, hacker ètic, red teaming, master ciberseguretat, bug bounty, auditories seguretat, proves penetració'
  }
};

const upsertMeta = (selector, create, valueKey, value) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element[valueKey] = value;
  return element;
};

const SEOHead = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const routeLang = getRouteLangFromPath(location.pathname) || getCurrentRouteLang(i18n.language);
  const languageConfig = LANGUAGE_ROUTES[routeLang] || LANGUAGE_ROUTES[DEFAULT_ROUTE_LANG];
  const currentLang = languageConfig.i18nCode;
  const langData = translations[currentLang] || translations.en;
  const isResumePage = location.pathname === '/resume' || location.pathname.endsWith('/resume');
  const pagePath = isResumePage ? `/${routeLang}/resume/` : `/${routeLang}/`;
  const canonicalUrl = `${BASE_URL}${pagePath}`;

  useEffect(() => {
    document.title = langData.title;
    document.documentElement.lang = languageConfig.htmlLang;

    upsertMeta(
      'meta[name="description"]',
      () => {
        const meta = document.createElement('meta');
        meta.name = 'description';
        return meta;
      },
      'content',
      langData.description
    );

    upsertMeta(
      'meta[name="keywords"]',
      () => {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        return meta;
      },
      'content',
      langData.keywords
    );

    upsertMeta(
      'meta[name="robots"]',
      () => {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        return meta;
      },
      'content',
      isResumePage ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
    );

    upsertMeta(
      'meta[name="language"]',
      () => {
        const meta = document.createElement('meta');
        meta.name = 'language';
        return meta;
      },
      'content',
      languageConfig.label
    );

    const canonical = upsertMeta(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement('link');
        link.rel = 'canonical';
        return link;
      },
      'href',
      canonicalUrl
    );
    canonical.href = canonicalUrl;

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
    Object.keys(LANGUAGE_ROUTES).forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = LANGUAGE_ROUTES[lang].htmlLang;
      link.href = `${BASE_URL}/${lang}/${isResumePage ? 'resume/' : ''}`;
      document.head.appendChild(link);
    });

    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${BASE_URL}/`;
    document.head.appendChild(defaultLink);

    upsertMeta(
      'meta[property="og:locale"]',
      () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:locale');
        return meta;
      },
      'content',
      languageConfig.locale
    );

    const alternateLocales = Object.values(LANGUAGE_ROUTES)
      .map(lang => lang.locale)
      .filter(locale => locale !== languageConfig.locale);

    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(meta => meta.remove());
    alternateLocales.forEach(locale => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale:alternate');
      meta.content = locale;
      document.head.appendChild(meta);
    });

    upsertMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      return meta;
    }, 'content', langData.title);

    upsertMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      return meta;
    }, 'content', langData.description);

    upsertMeta('meta[property="og:url"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      return meta;
    }, 'content', canonicalUrl);

    upsertMeta('meta[property="og:type"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      return meta;
    }, 'content', 'profile');

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${BASE_URL}/#jordan-macia`,
          name: 'Jordan Macia De Las Heras',
          url: canonicalUrl,
          jobTitle: 'Cybersecurity Student and Pentester',
          sameAs: [
            'https://www.linkedin.com/in/jordanmacia/',
            'https://github.com/jordanmacia',
            'https://app.hackthebox.com/users/1345367',
            'https://hacking-notes.jord4n.pro/'
          ],
          knowsAbout: ['Cybersecurity', 'Pentesting', 'Ethical Hacking', 'Red Teaming', 'Web Security']
        },
        {
          '@type': 'ProfilePage',
          '@id': `${canonicalUrl}#profile`,
          url: canonicalUrl,
          name: langData.title,
          description: langData.description,
          inLanguage: languageConfig.htmlLang,
          mainEntity: { '@id': `${BASE_URL}/#jordan-macia` }
        },
        {
          '@type': 'SiteNavigationElement',
          '@id': `${canonicalUrl}#site-navigation`,
          name: ['Home', 'About', 'Projects', 'Resume'],
          url: [
            ...HOME_SECTION_IDS.map(section => `${BASE_URL}/${routeLang}/#${section}`),
            `${BASE_URL}/${routeLang}/resume/`
          ]
        }
      ]
    };

    const existingJsonLd = document.getElementById('profile-structured-data');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }
    const jsonLd = document.createElement('script');
    jsonLd.id = 'profile-structured-data';
    jsonLd.type = 'application/ld+json';
    jsonLd.textContent = JSON.stringify(structuredData);
    document.head.appendChild(jsonLd);
  }, [canonicalUrl, currentLang, isResumePage, langData, languageConfig, routeLang]);

  return null;
};

export default SEOHead;
