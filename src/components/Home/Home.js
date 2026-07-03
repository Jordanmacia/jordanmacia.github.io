import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Particle from "../Particle";
import Home2 from "./Home2";
import Projects from "./Projects";
import hackerAnimation from "../../Assets/hacker.json";
import Type from "./Type";
import Lottie from "lottie-react";

function Home() {
  const { t } = useTranslation();

  // Fonction pour gérer le défilement vers la section correspondante
  const scrollToSection = (hash) => {
    if (hash === "#project" || hash === "#about" || hash === "#home") {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Utilisation de useEffect pour écouter les changements dans l'URL
  useEffect(() => {
    const handleHashChange = () => {
      scrollToSection(window.location.hash);
    };

    // Déclencher le défilement au chargement initial de la page
    handleHashChange();

    // Écouter les changements de hash dans l'URL
    window.addEventListener("hashchange", handleHashChange);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section>
      {/* Section Home */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, marginLeft: "-5px" }} className="heading">
                {t('hello')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {t('im')}
                <strong className="main-name"> Jordan</strong>
              </h1>
              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Lottie
                animationData={hackerAnimation}
                loop
                autoplay
                style={{
                  height: "500px",
                  width: "500px",
                  marginLeft: "-75px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Projects/>
    </section>
  );
}

export default Home;
