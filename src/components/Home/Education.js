import React from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiBookOpen, FiGlobe } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { getCurrentRouteLang } from "../../seoConfig";

const studies = [
  { key: "master", years: "2025 — 2027", href: "https://www.ynov.com/formations/cybersecurite/mastere-expert-en-cybersecurite" },
  { key: "bachelor", years: "2024 — 2025", href: "https://www.ynov.com/formations/cybersecurite/bachelor-cybersecurite" },
  { key: "bts", years: "2022 — 2024", href: "https://ozenne.mon-ent-occitanie.fr/les-formations/sections-de-techniciens-superieurs/bts-services-informatiques-aux-organisations/" },
];
const languages = [
  { code: "ES", name: "language_spanish", level: "language_native" },
  { code: "CA", name: "language_catalan", level: "language_native" },
  { code: "FR", name: "language_french", level: "language_fluent" },
  { code: "EN", name: "language_english", level: "language_technical" },
];

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="pf-section" aria-labelledby="education-title">
      <SectionHeading id="education-title" icon={FiBookOpen} title={t("education_heading")} />
      <div className="pf-study-grid">
        {studies.map(({ key, years, href }) => (
          <article className={`pf-study${key === "master" ? " pf-study-featured" : ""}`} key={key}>
            <div className="pf-study-top"><span>{years}</span></div>
            <h3>{t(`${key}_title`)}</h3>
            <p>{t(`${key}_school`).replace(/\s*\(\d{4}-\d{4}\)/, "")}</p>
            <a className="pf-button pf-study-button" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${t("view_program")}: ${t(`${key}_title`)}`}>
              {t("view_program")} <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Languages() {
  const { t, i18n } = useTranslation();
  const current = getCurrentRouteLang(i18n.resolvedLanguage || i18n.language).toUpperCase();
  const orderedLanguages = [...languages].sort((a, b) => Number(b.code === current) - Number(a.code === current));
  return (
    <section id="languages" className="pf-section" aria-labelledby="languages-title">
      <SectionHeading id="languages-title" icon={FiGlobe} title={t("languages_heading")} />
      <ul className="pf-spoken-languages">
        {orderedLanguages.map(({ code, name, level }) => (
          <li key={code}>
            <span className="pf-language-code" aria-hidden="true"><img src={`/flags/${code === "EN" ? "gb" : code === "CA" ? "ad" : code.toLowerCase()}.svg`} alt="" width="30" height="20" /></span>
            <div><h3>{t(name)}</h3><p className="pf-language-level">{t(level)}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
