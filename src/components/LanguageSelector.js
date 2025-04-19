import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button 
        className={`flag-button ${i18n.language === 'fr' ? 'active' : ''}`}
        onClick={() => changeLanguage('fr')}
        aria-label="Français"
      >
        <img src="/flags/fr.svg" alt="FR" title="Français" />
      </button>
      <button 
        className={`flag-button ${i18n.language === 'es' ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
        aria-label="Español"
      >
        <img src="/flags/es.svg" alt="ES" title="Español" />
      </button>
      <button 
        className={`flag-button ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="English"
      >
        <img src="/flags/gb.svg" alt="EN" title="English" />
      </button>
      <button 
        className={`flag-button ${i18n.language === 'ad' ? 'active' : ''}`}
        onClick={() => changeLanguage('ad')}
        aria-label="Català"
      >
        <img src="/flags/ad.svg" alt="AD" title="Català" />
      </button>
      
    </div>
  );
};

export default LanguageSelector;
