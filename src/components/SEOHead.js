import React, { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = 'Portfolio | Jordan Macia - Cybersecurity Expert';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Jordan Macia De Las Heras Portfolio | Welcome to my portfolio! Discover my journey, skills and projects in cybersecurity. Passionate cybersecurity student focused on Pentesting and Red Teaming.';
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'Jordan Macia, portfolio, cybersecurity, pentesting, red teaming, ethical hacker, CTF, cybersecurity projects, cybersecurity skills';
    
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
      { code: 'en', url: 'https://jord4n.pro/' },
      { code: 'fr', url: 'https://jord4n.pro/' },
      { code: 'es', url: 'https://jord4n.pro/' },
      { code: 'ca', url: 'https://jord4n.pro/' },
      { code: 'x-default', url: 'https://jord4n.pro/' }
    ];
    
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang.code;
      link.href = lang.url;
      document.head.appendChild(link);
    });
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.property = 'og:title';
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Portfolio | Jordan Macia - Cybersecurity Expert';
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.property = 'og:description';
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = 'Jordan Macia De Las Heras Portfolio | Welcome to my portfolio! Discover my journey, skills and projects in cybersecurity.';
    
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
  }, []);

  return null; // Component doesn't render anything
};

export default SEOHead;
