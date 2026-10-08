import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import HackingNotesIcon from "../../Assets/Brands/hacking-notes.png";
import HackingNotesIconAvif from "../../Assets/Optimized/hacking-notes-icon.avif";
import Experience from "./Experience";
import Home2, { Certifications } from "./Home2";
import Projects from "./Projects";
import Education, { Languages } from "./Education";
import { AnimatedContent, HeroStrong } from "../PortfolioEffects";

export default function Home() {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "instant", block: "start" });
    };
    // Language switches preserve the current position, even when the URL has an old anchor.
    const frame = location.state?.scrollPosition ? null : requestAnimationFrame(scrollToHash);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [location.pathname, location.hash, location.state]);

  return (
    <main id="main" className="pf-container">
      <section id="home" className="pf-hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="pf-enter pf-delay-1">
          <span className="pf-greeting">{t("hero_greeting")} </span>
          <span className="pf-name-accent">Jordan Macia De Las Heras</span>
        </h1>
        <div className="pf-hero-intro pf-enter pf-delay-2">
          <p><Trans i18nKey="hero_intro" components={{ strong: <HeroStrong /> }} /></p>
        </div>
        <nav className="pf-social-links pf-enter pf-delay-3" aria-label={t("social_label")}>
          <a className="pf-button" href="mailto:jordanmacia@protonmail.com">
            <FiMail aria-hidden="true" /> {t("hero_contact")}
          </a>
          <a className="pf-button" href="https://www.linkedin.com/in/jordanmacia/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a className="pf-button" href="https://hacking-notes.jord4n.pro/" target="_blank" rel="noopener noreferrer">
            <picture className="pf-social-icon">
              <source srcSet={HackingNotesIconAvif} type="image/avif" />
              <img src={HackingNotesIcon} alt="" width="18" height="18" />
            </picture> Hacking Notes
          </a>
        </nav>
      </section>
      <AnimatedContent><Experience /></AnimatedContent>
      <AnimatedContent><Projects /></AnimatedContent>
      <AnimatedContent><Certifications /></AnimatedContent>
      <AnimatedContent><Education /></AnimatedContent>
      <AnimatedContent><Languages /></AnimatedContent>
      <AnimatedContent><Home2 /></AnimatedContent>
    </main>
  );
}
