import React from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="pf-footer pf-container">
      <p className="pf-footer-copyright">
        <span className="pf-footer-domain">jord4n.pro</span>
        <span className="pf-footer-divider" aria-hidden="true">·</span>
        <span>© {new Date().getFullYear()}</span>
        <span>{t("footer_rights")}</span>
      </p>
      <a className="pf-text-link pf-footer-contact" href="mailto:jordanmacia@protonmail.com">
        {t("contact")} <FiArrowUpRight aria-hidden="true" />
      </a>
    </footer>
  );
}
