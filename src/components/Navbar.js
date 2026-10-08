import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMoon, FiMoreHorizontal, FiSun } from "react-icons/fi";
import LanguageSelector from "./LanguageSelector";

const sections = [
  ["experience", "experience"],
  ["project", "projects"],
  ["certifications", "cert_heading"],
  ["about", "about_heading"],
];

function NavBar() {
  const { t } = useTranslation();
  const [active, setActive] = useState("");
  const [compact, setCompact] = useState(false);
  const [compactWidth, setCompactWidth] = useState(640);
  const navRef = useRef(null);
  const morphRef = useRef({ value: 0, velocity: 0 });
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const updateCompact = () => setCompact(window.scrollY > 80);
    updateCompact();
    window.addEventListener("scroll", updateCompact, { passive: true });
    window.addEventListener("pageshow", updateCompact);
    return () => {
      window.removeEventListener("scroll", updateCompact);
      window.removeEventListener("pageshow", updateCompact);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const target = compact ? 1 : 0;
    let frame;
    let previousTime;
    let startTime;
    let startValue;
    const paint = (value) => nav.style.setProperty("--pf-nav-morph", String(value));
    const tick = (time) => {
      const spring = morphRef.current;
      if (motion.matches) {
        // Reduced motion still gets a gentle, non-bouncing resize instead of a hard cut.
        startTime ??= time;
        const progress = Math.min((time - startTime) / 450, 1);
        const eased = progress * progress * (3 - 2 * progress);
        spring.value = startValue + (target - startValue) * eased;
        spring.velocity = 0;
        paint(spring.value);
        if (progress < 1) frame = requestAnimationFrame(tick);
        return;
      }
      const dt = Math.min((time - (previousTime ?? time - 16)) / 1000, 0.032);
      previousTime = time;
      // A damped spring moves the frame, padding and depth together without scaling text.
      spring.velocity += (150 * (target - spring.value) - 25 * spring.velocity) * dt;
      spring.value += spring.velocity * dt;
      paint(Math.max(0, Math.min(1, spring.value)));
      if (Math.abs(target - spring.value) < 0.001 && Math.abs(spring.velocity) < 0.005) {
        spring.value = target;
        spring.velocity = 0;
        paint(target);
      } else {
        frame = requestAnimationFrame(tick);
      }
    };
    const start = () => {
      cancelAnimationFrame(frame);
      previousTime = undefined;
      startTime = undefined;
      startValue = morphRef.current.value;
      frame = requestAnimationFrame(tick);
    };
    start();
    motion.addEventListener("change", start);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", start);
    };
  }, [compact]);

  useEffect(() => {
    const nav = navRef.current;
    const measure = () => {
      if (window.innerWidth <= 600) return;
      const style = getComputedStyle(nav);
      const contentWidth = Array.from(nav.children).reduce((total, child) => total + child.getBoundingClientRect().width, 0);
      const compactPadding = window.innerWidth <= 760 ? 12 : 15;
      setCompactWidth(Math.ceil(contentWidth + parseFloat(style.columnGap) + compactPadding * 2 + 2));
    };
    const observer = new ResizeObserver(measure);
    Array.from(nav.children).forEach((child) => observer.observe(child));
    window.addEventListener("resize", measure);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-15% 0px -55% 0px" });
    ["home", ...sections.map(([id]) => id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`pf-header${compact ? " pf-header-compact" : ""}`}>
      <nav ref={navRef} className="pf-nav" aria-label={t("menu")}
        style={{ "--pf-nav-compact-width": `${compactWidth}px` }}>
        <div className="pf-nav-links">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""}
              aria-current={active === id ? "location" : undefined}>
              {t(label)}
            </a>
          ))}
          <a href="mailto:jordanmacia@protonmail.com">{t("contact")}</a>
        </div>
        <div className="pf-nav-tools">
          <LanguageSelector />
          <button className="pf-theme-toggle" type="button"
            aria-label={t(theme === "dark" ? "theme_light" : "theme_dark")}
            title={t(theme === "dark" ? "theme_light" : "theme_dark")}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
        </div>
        <details className="pf-mobile-tools">
          <summary aria-label={t("menu")} title={t("menu")}>
            <FiMoreHorizontal aria-hidden="true" />
          </summary>
          <div className="pf-mobile-tools-menu">
            <LanguageSelector />
            <button className="pf-theme-toggle" type="button"
              aria-label={t(theme === "dark" ? "theme_light" : "theme_dark")}
              title={t(theme === "dark" ? "theme_light" : "theme_dark")}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>
          </div>
        </details>
      </nav>
    </header>
  );
}

export default NavBar;
