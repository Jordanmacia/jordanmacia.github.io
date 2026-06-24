import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEOHead = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const location = useLocation();
  
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
    ca: {
      title: 'Portfolio | Jordan Macia - Expert Ciberseguretat | Pentester',
      description: 'Jordan Macia - Expert en Ciberseguretat i Pentester. Master en Ciberseguretat. Especialitzat en Pentesting, Red Teaming i Hacking Ètic. Disponible per a alternança.',
      keywords: 'Jordan Macia, ciberseguretat, pentesting, hacker ètic, red teaming, master ciberseguretat, bug bounty, auditories seguretat, proves penetració'
    }
  };

  const langData = translations[currentLang] || translations.en;
  const isResumePage = location.pathname === '/resume' || location.pathname.startsWith('/resume/');

  useEffect(() => {
    // Update title
    document.title = langData.title;
    document.documentElement.lang = currentLang;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = langData.description;
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = langData.keywords;

    // Update robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = isResumePage ? 'noindex, nofollow' : 'index, follow';
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.jord4n.pro';
    
    // Remove existing hreflang tags to avoid duplicates
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingLinks.forEach(link => link.remove());
    
    // Add hreflang tags for all languages
    const languages = [
      { code: 'en', url: 'https://www.jord4n.pro' },
      { code: 'fr', url: 'https://www.jord4n.pro' },
      { code: 'es', url: 'https://www.jord4n.pro' },
      { code: 'ca', url: 'https://www.jord4n.pro' },
      { code: 'x-default', url: 'https://www.jord4n.pro' }
    ];
    
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang.code;
      link.href = lang.url;
      document.head.appendChild(link);
    });
    
    // Update og:locale
    const localeMap = {
      en: 'en_US',
      fr: 'fr_FR',
      es: 'es_ES',
      ca: 'ca_ES'
    };
    
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.property = 'og:locale';
      document.head.appendChild(ogLocale);
    }
    ogLocale.content = localeMap[currentLang] || 'en_US';
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.property = 'og:title';
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = langData.title;
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.property = 'og:description';
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = langData.description;
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.property = 'og:url';
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = 'https://www.jord4n.pro';
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.property = 'og:type';
      document.head.appendChild(ogType);
    }
    ogType.content = 'website';

  }, [currentLang, langData, isResumePage]);

  return null;
};

export default SEOHead;
