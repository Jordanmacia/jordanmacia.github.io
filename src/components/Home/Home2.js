import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./HomeAndAbout.css";

function HomeAndAbout() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Section 1: Introduction */}
        <Row className="mb-5">
          <Col md={12} className="home-about-description text-center">
            <h1 className="section-title">
              <span className="purple"><b>$</b></span> whoami
            </h1>
            <p className="home-about-body">
              <b><span className="purple">{t('full_name')}</span></b>
              <br />
              {t('about_intro_text')}
              <br />
              {t('birth_place')}
              <br />
              {t('languages')}
              <br />
            </p>
          </Col>
        </Row>

        {/* Section 2: Career Details */}
        <Row className="mb-5">
          {/* Education */}
          <Col md={4} sm={12} className="mb-4">
            <Card className="h-100 card-hover transparent-card">
              <Card.Body>
                <h2 className="purple"><FaGraduationCap className="icon" /> <strong>{t('education')}</strong></h2>
                <p>
                  <b className="purple">{t('master_title')}</b>
                  <br />
                  <em>{t('master_school')}</em>
                  <ul className="text-left">
                    <li>{t('master_coming_soon')}</li>
                  </ul>

                  <b className="purple">{t('bachelor_title')}</b>
                  <br />
                  <em>{t('bachelor_school')}</em>
                  <br />
                  <ul className="text-left">
                    <br />
                    <li>{t('bachelor_skill_1')}</li>
                    <li>{t('bachelor_skill_2')}</li>
                    <li>{t('bachelor_skill_3')}</li>
                    <li>{t('bachelor_skill_4')}</li>
                  </ul>

                  <b className="purple">{t('bts_title')}</b>
                  <br />
                  <em>{t('bts_school')}</em>
                  <br />
                  <br />
                  <ul className="text-left">
                    <li>{t('bts_skill_1')}</li>
                    <li>{t('bts_skill_2')}</li>
                    <li>{t('bts_skill_3')}</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Professional Experience */}
          <Col md={4} sm={12} className="mb-4">
            <Card className="h-100 card-hover transparent-card">
              <Card.Body>
                <h2 className="purple">
                  <FaBriefcase className="icon" /> <strong>{t('professional_experience')}</strong>
                </h2>
                <p>
                  <b className="purple">{t('doomap_title')}</b>
                  <br />
                  <em>{t('doomap_period')}</em>
                  <br />
                  <ul className="text-left">
                    <br />
                    <li>{t('doomap_task_1')}</li>
                    <li>{t('doomap_task_2')}</li>
                    <li>{t('doomap_task_3')}</li>
                    <li>{t('doomap_task_4')}</li>
                  </ul>

                  <b className="purple">{t('telecom_title')}</b>
                  <br />
                  <em>{t('telecom_period')}</em>
                  <br />
                  <ul className="text-left">
                    <br />
                    <li>{t('telecom_task_1')}</li>
                    <li>{t('telecom_task_2')}</li>
                    <li>{t('telecom_task_3')}</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Certifications */}
          <Col md={4} sm={12} className="mb-4">
            <Card className="h-100 card-hover transparent-card">
              <Card.Body>
                <h2 className="purple">
                  <FaCertificate className="icon" /> <strong>{t('certifications')}</strong>
                </h2>
                <p>
                  {t('certification_intro')}
                  <br /><br />
                  <ul>
                    <li>
                      <span className="purple">{t('ewpt_title')}</span> - {t('ewpt_date')}
                      <ul>
                        <li>{t('ewpt_desc_1')}</li>
                        <li>{t('ewpt_desc_2')}</li>
                      </ul>
                    </li>
                    <li>
                      <span className="purple">{t('ejpt_title')}</span> - {t('ejpt_date')}
                      <ul>
                        <li>{t('ejpt_desc_1')}</li>
                        <li>{t('ejpt_desc_2')}</li>
                      </ul>
                    </li>
                  </ul>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeAndAbout;