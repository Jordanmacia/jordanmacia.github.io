import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/eWPT.png";
import editor from "../../Assets/Projects/AI.png";
import chatify from "../../Assets/Projects/htb.png";
import suicide from "../../Assets/Projects/ejpt.png";
import bitsOfCode from "../../Assets/Projects/introduction-hacking.png";
import HackingNotes from "../../Assets/Projects/hacking.png";
import { SocialLinks } from "./Toolstack";
import { Toolstack } from "./Toolstack";

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
              imgPath={chatify}
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
              imgPath={suicide}
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
              imgPath={leaf}
              isBlog={false}
              title={<strong>{t('ewpt_cert')}</strong>}
              description={t('ewpt_description')}
              certificationLink="https://security.ine.com/certifications/ewpt-certification/"
              alwaysShowDescription={true}
            />
          </Col>
          <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={<strong>{t('ai_project')}</strong>}
              description={t('ai_description')}
              alwaysShowDescription={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={<strong>{t('hacking_course')}</strong>}
              description={t('hacking_course_description')}
              courseLink="https://hack4u.io/cursos/introduccion-al-hacking/"
              alwaysShowDescription={false}
            />
          </Col>
        </Row>
        <SocialLinks />
      </Container>
    </Container>
  );
}

export default Projects;
