import React, { useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurrentRouteLang, getLanguagePath, LANGUAGE_ROUTES } from "../seoConfig";

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const selectorRef = useRef(null);
  const current = getCurrentRouteLang(i18n.resolvedLanguage || i18n.language);
  const flagPath = (code) => `/flags/${code === "en" ? "gb" : code === "ca" ? "ad" : code}.svg`;
  const orderedLanguages = ["es", "ca", "fr", "en"]
    .map((code) => [code, LANGUAGE_ROUTES[code]])
    .sort(([a], [b]) => Number(b === current) - Number(a === current));

  useEffect(() => {
    const closeOutside = (event) => {
      if (!selectorRef.current?.contains(event.target)) selectorRef.current?.removeAttribute("open");
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  const changeLanguage = (event, routeLang) => {
    event.preventDefault();
    const scrollPosition = { x: window.scrollX, y: window.scrollY };
    i18n.changeLanguage(LANGUAGE_ROUTES[routeLang].i18nCode);
    navigate(`${getLanguagePath(routeLang, location.pathname)}${location.search}${location.hash}`, { state: { scrollPosition } });
    selectorRef.current.removeAttribute("open");
    selectorRef.current.querySelector("summary").focus({ preventScroll: true });
  };

  return (
    <details className="pf-language" ref={selectorRef} onKeyDown={(event) => {
      if (event.key === "Escape") {
        selectorRef.current.removeAttribute("open");
        selectorRef.current.querySelector("summary").focus({ preventScroll: true });
      }
    }}>
      <summary aria-label={`${t("language")}: ${LANGUAGE_ROUTES[current].label}`}>
        <img src={flagPath(current)} alt="" width="24" height="16" /><FiChevronDown aria-hidden="true" />
      </summary>
      <div className="pf-language-options">
        {orderedLanguages.map(([code, language]) => (
          <a key={code} href={`${getLanguagePath(code, location.pathname)}${location.search}${location.hash}`} lang={language.htmlLang}
            aria-current={code === current ? "true" : undefined} onClick={(event) => changeLanguage(event, code)}>
            <img src={flagPath(code)} alt="" width="24" height="16" />{language.label}
          </a>
        ))}
      </div>
    </details>
  );
}
