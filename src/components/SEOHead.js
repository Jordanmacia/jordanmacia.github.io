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
    title: 'Portfolio | Jordan Macia - Pentester',
    description: 'Explore my background, skills, projects, education, certifications and a little more about me.',
    keywords: 'Jordan Macia, cybersecurity, pentesting, ethical hacking, projects, certifications, portfolio'
  },
  fr: {
    title: 'Portfolio | Jordan Macia - Pentester',
    description: 'Découvrez mon parcours, mes compétences, mes projets, mes études, mes certifications et un peu plus sur moi.',
    keywords: 'Jordan Macia, cybersécurité, pentesting, hacking éthique, projets, certifications, portfolio'
  },
  es: {
    title: 'Portfolio | Jordan Macia - Pentester',
    description: 'Descubre mi trayectoria, habilidades, proyectos, estudios, certificaciones y un poco más sobre mí.',
    keywords: 'Jordan Macia, ciberseguridad, pentesting, hacking ético, proyectos, certificaciones, portfolio'
  },
  ad: {
    title: 'Portfolio | Jordan Macia - Pentester',
    description: 'Descobreix la meva trajectòria, habilitats, projectes, estudis, certificacions i una mica més sobre mi.',
    keywords: 'Jordan Macia, ciberseguretat, pentesting, hacking ètic, projectes, certificacions, portafolis'
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
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const routeLang = getRouteLangFromPath(location.pathname) || getCurrentRouteLang(i18n.language);
  const languageConfig = LANGUAGE_ROUTES[routeLang] || LANGUAGE_ROUTES[DEFAULT_ROUTE_LANG];
  const currentLang = languageConfig.i18nCode;
  const langData = translations[currentLang] || translations.en;
  const canonicalUrl = `${BASE_URL}/${routeLang}/`;

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
      'index, follow, noimageindex, max-image-preview:large'
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
      link.href = `${BASE_URL}/${lang}/`;
      document.head.appendChild(link);
    });

    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${BASE_URL}/en/`;
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
          jobTitle: 'Pentester',
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
          name: [t('experience'), t('projects'), t('cert_heading'), t('about_heading')],
          url: HOME_SECTION_IDS.map(section => `${BASE_URL}/${routeLang}/#${section}`)
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
  }, [canonicalUrl, currentLang, langData, languageConfig, routeLang, t]);

  return null;
};

export default SEOHead;
