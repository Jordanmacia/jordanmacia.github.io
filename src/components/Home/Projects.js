import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EWPT from "../../Assets/Projects/eWPT.png";
import AI from "../../Assets/Projects/AI.png";
import Htb from "../../Assets/Projects/htb.png";
import Ejpt from "../../Assets/Projects/ejpt.png";
import PortSwigger from "../../Assets/Projects/portswigger.jpg";
import HackingNotes from "../../Assets/Projects/hacking.png";
import { SocialLinks } from "./Toolstack";

function Projects() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="project-section" id="project">      
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('recent_prefix')}{' '}
          <strong className="purple">{t('recent_highlight')}</strong>{' '}
          {t('recent_suffix')}
        </h1>
        <p style={{ color: "white" }}>
          {t('recent_projects')}
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Htb}
              isBlog={false}
              title={<strong>{t('training_platform')}</strong>}
              description={
                <>
                  <strong className="highlight-text">HackTheBox</strong>
                  {' '}
                  {t('htb_description')}
                </>
              }
              cubeLink="https://hackthebox.com/"
              alwaysShowDescription={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HackingNotes}
              isBlog={false}
              title={<strong>{t('hacking_notes')}</strong>}
              description={t('notes_description')}
              notesLink="https://hacking-notes.jord4n.pro/"
              alwaysShowDescription={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ejpt}
              isBlog={false}
              title={<strong>{t('ejpt_cert')}</strong>}
              description={t('ejpt_description')}
              certificationLink="https://certs.ine.com/41b85729-a887-4a15-bd05-16ad3e6aca84#acc.EDitTVXy"
              alwaysShowDescription={true}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortSwigger}
              isBlog={false}
              title={<strong>{t('websec_academy')}</strong>}
              description={t('websec_academy_description')}
              courseLink="https://hacking-notes.jord4n.pro/web-hacking-portswigger/web/"
              alwaysShowDescription={false}
            />
          </Col>
          <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={AI}
              isBlog={false}
              title={<strong>{t('ai_project')}</strong>}
              description={t('ai_description')}
              alwaysShowDescription={false}
            />
          </Col>
          
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EWPT}
              isBlog={false}
              title={<strong>{t('ewpt_cert')}</strong>}
              description={t('ewpt_description')}
              certificationLink="https://security.ine.com/certifications/ewpt-certification/"
              alwaysShowDescription={true}
            />
          </Col>
        </Row>
        <SocialLinks />
      </Container>
    </Container>
  );
}

export default Projects;
