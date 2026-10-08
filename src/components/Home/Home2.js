import React from "react";
import { useTranslation } from "react-i18next";
import { FiAward, FiUser, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import BSCP from "../../Assets/Projects/portswigger.jpg";
import CWES from "../../Assets/Projects/CWES.png";
import Ejpt from "../../Assets/Projects/ejpt.png";
import Jordan from "../../Assets/jordan.png";
import JordanAvif from "../../Assets/Optimized/jordan.avif";
import BscpAvif from "../../Assets/Optimized/portswigger.avif";
import CwesAvif from "../../Assets/Optimized/CWES.avif";
import EjptAvif from "../../Assets/Optimized/ejpt.avif";
import PortSwiggerLogo from "../../Assets/Brands/portswigger.png";
import HtbLogo from "../../Assets/Brands/hackthebox.png";
import IneLogo from "../../Assets/Brands/ine.png";
import OffSecLogo from "../../Assets/Brands/offsec.png";

const certs = [
  { name: "BSCP", title: "bscp_title", org: "PortSwigger · Web Security Academy", logo: PortSwiggerLogo, date: "bscp_date", image: BSCP, avif: BscpAvif, imageHeight: 1079, imageZoom: 1,
    href: "https://portswigger.net/web-security/e/c/1095edc235a1c7d4", focus: "Web security" },
  { name: "CWES", title: "ewptx_title", org: "Hack The Box", logo: HtbLogo, date: "ewptx_date", image: CWES, avif: CwesAvif, imageHeight: 1079, imageZoom: 1.35, imageOrigin: "center 20%",
    href: "https://www.credly.com/badges/db68575b-8a45-471d-9cfb-2a0e5df0c0f8", focus: "Web exploitation" },
  { name: "eJPT", title: "ejpt_title", org: "INE Security", logo: IneLogo, wideLogo: true, date: "ejpt_date", image: Ejpt, avif: EjptAvif, imageHeight: 1080, imageZoom: 1.39,
    href: "https://certs.ine.com/41b85729-a887-4a15-bd05-16ad3e6aca84#acc.EDitTVXy", focus: "Pentesting" },
];

const preparingCerts = [
  { name: "OSCP", title: "OffSec Certified Professional", org: "OffSec", logo: OffSecLogo, wideLogo: true },
  { name: "CPTS", title: "HTB Certified Penetration Testing Specialist", org: "Hack The Box Academy", logo: HtbLogo },
];

export function Certifications() {
  const { t } = useTranslation();
  return (
    <section id="certifications" className="pf-section" aria-labelledby="certifications-title">
      <SectionHeading id="certifications-title" icon={FiAward} title={t("cert_heading")} />
      <div className="pf-cert-grid">
        {certs.map((cert) => (
          <a className="pf-cert" key={cert.name} href={cert.href} target="_blank" rel="noopener noreferrer"
            aria-label={`${t("verify_cert")}: ${t(cert.title)}`}>
            <div className="pf-cert-preview">
              <picture>
                <source srcSet={cert.avif} type="image/avif" />
                <img className="pf-cert-image" src={cert.image} alt={t(cert.title)} style={{ transform: `scale(${cert.imageZoom})`, transformOrigin: cert.imageOrigin || "center" }}
                  loading="lazy" decoding="async" width="1920" height={cert.imageHeight} />
              </picture>
            </div>
            <div className="pf-cert-content">
              <div className="pf-cert-platform">
                <span className={`pf-cert-mark${cert.wideLogo ? " pf-cert-mark-wide" : ""}`} aria-hidden="true">
                  <img src={cert.logo} alt="" width={cert.wideLogo ? 72 : 32} height="32" loading="lazy" />
                </span>
                <div><strong>{cert.org}</strong></div>
              </div>
              <h3>{cert.name}</h3>
              <p>{t(cert.title).replace(/^\S+\s*\(|\)$/g, "")}</p>
              <div className="pf-cert-bottom">
                <span>{t(cert.date)}</span>
                <span className="pf-cert-link">{t("verify_cert")} <FiArrowUpRight aria-hidden="true" /></span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="pf-cert-preparing-grid">
        {preparingCerts.map((cert) => (
          <article className="pf-cert-preparing" key={cert.name}>
            <div className="pf-cert-platform">
              <span className={`pf-cert-mark${cert.wideLogo ? " pf-cert-mark-wide" : ""}`} aria-hidden="true">
                <img src={cert.logo} alt="" width={cert.wideLogo ? 72 : 32} height="32" loading="lazy" />
              </span>
              <div><strong>{cert.org}</strong></div>
            </div>
            <h3>{cert.name}</h3>
            <p>{cert.title}</p>
            <span className="pf-cert-status">{t("cert_preparing")}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="pf-section pf-about" aria-labelledby="about-title">
      <SectionHeading id="about-title" icon={FiUser} title={t("about_heading")} />
      <div className="pf-about-intro">
        <div className="pf-about-copy">
          <p>{t("about_first")}</p>
          <p>{t("about_second")}</p>
          <p>{t("about_third")}</p>
        </div>
        <figure className="pf-about-photo">
          <picture>
            <source srcSet={JordanAvif} type="image/avif" />
            <img src={Jordan} alt="Jordan Macia De Las Heras" width="800" height="800"
              loading="lazy" decoding="async" />
          </picture>
        </figure>
      </div>
    </section>
  );
}
