import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import "../../style/About.css";

function About() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('professional_heading')} <strong className="purple">{t('about_me')}</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          {t('about_subheading')}
        </p>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            lg={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t('professional_tools')} <strong className="purple">{t('i_use')}</strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
