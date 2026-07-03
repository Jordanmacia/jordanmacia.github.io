import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import LanguageSelector from "./components/LanguageSelector";
import DynamicFavicon from "./components/DynamicFavicon";
import SEOHead from "./components/SEOHead";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop";
import { getRouteLangFromPath, LANGUAGE_ROUTES } from "./seoConfig";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n"; // Import i18n configuration

function AppContent() {
  const [load, upadateLoad] = useState(true);
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const routeLang = getRouteLangFromPath(location.pathname);
    if (!routeLang) {
      return;
    }

    const nextLanguage = LANGUAGE_ROUTES[routeLang].i18nCode;
    if (i18n.language !== nextLanguage) {
      i18n.changeLanguage(nextLanguage);
    }
  }, [i18n, location.pathname]);

  return (
    <>
      <SEOHead />
      <DynamicFavicon />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <LanguageSelector />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/:lang/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
