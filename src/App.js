import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import SEOHead from "./components/SEOHead";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop";
import { getRouteLangFromPath, LANGUAGE_ROUTES } from "./seoConfig";
import "./portfolio.css";
import "./i18n";

function AppContent() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const routeLang = getRouteLangFromPath(location.pathname);
    if (routeLang) {
      const nextLanguage = LANGUAGE_ROUTES[routeLang].i18nCode;
      if (i18n.language !== nextLanguage) i18n.changeLanguage(nextLanguage);
    }
  }, [i18n, location.pathname]);

  return (
    <>
      <SEOHead />
      <a className="pf-skip" href="#main">{t("skip_content")}</a>
      <div className="portfolio">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to={`/en/${location.search}${location.hash}`} replace />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="*" element={<Navigate to="/en/" replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return <Router><AppContent /></Router>;
}
