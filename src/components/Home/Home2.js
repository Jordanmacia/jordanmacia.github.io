import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";
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
            <Card className="h-100 card-hover transparent-card accent-section">
              <Card.Body>
                <h2 className="purple"><FaGraduationCap className="icon" /> <strong>{t('education')}</strong></h2>
                <div className="timeline-container" style={{ paddingTop: "15px" }}>
                  <div className="timeline-item">
                    <span className="timeline-title">{t('master_title')}</span>
                    <span className="timeline-subtitle">{t('master_school')}</span>
                    <ul className="timeline-list">
                      <li>{t('master_skill_tech')}</li>
                      <li>{t('master_skill_gov')}</li>
                      <li>{t('master_skill_infra')}</li>
                    </ul>
                  </div>

                  <div className="timeline-item">
                    <span className="timeline-title">{t('bachelor_title')}</span>
                    <span className="timeline-subtitle">{t('bachelor_school')}</span>
                  </div>

                  <div className="timeline-item">
                    <span className="timeline-title">{t('bts_title')}</span>
                    <span className="timeline-subtitle">{t('bts_school')}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Professional Experience */}
          <Col md={4} sm={12} className="mb-4">
            <Card className="h-100 card-hover transparent-card accent-section">
              <Card.Body>
                <h2 className="purple">
                  <FaBriefcase className="icon" /> <strong>{t('professional_experience')}</strong>
                </h2>
                <div className="timeline-container" style={{ paddingTop: "15px" }}>
                  <div className="timeline-item">
                    <span className="timeline-title">{t('doomap_title')}</span>
                    <span className="timeline-date">{t('doomap_period')}</span>
                    <ul className="timeline-list">
                      <li>{t('doomap_task_1')}</li>
                      <li>{t('doomap_task_2')}</li>
                      <li>{t('doomap_task_3')}</li>
                      <li>{t('doomap_task_4')}</li>
                    </ul>
                  </div>

                  <div className="timeline-item">
                    <span className="timeline-title">{t('telecom_title')}</span>
                    <span className="timeline-date">{t('telecom_period')}</span>
                    <ul className="timeline-list">
                      <li>{t('telecom_task_1')}</li>
                      <li>{t('telecom_task_2')}</li>
                      <li>{t('telecom_task_3')}</li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Certifications */}
          <Col md={4} sm={12} className="mb-4">
            <Card className="h-100 card-hover transparent-card accent-section">
              <Card.Body>
                <h2 className="purple">
                  <FaCertificate className="icon" /> <strong>{t('certifications')}</strong>
                </h2>
                <div className="certifications-container" style={{ paddingTop: "10px" }}>
                  <div className="cert-item">
                    <span className="cert-title">{t('ewptx_title')}</span>
                    <div className="cert-info">
                      <span className="cert-org">{t('ewptx_org')}</span>
                      <span className="cert-date">{t('ewptx_date')}</span>
                    </div>
                  </div>
                  
                  <div className="cert-item">
                    <span className="cert-title">{t('bscp_title')}</span>
                    <div className="cert-info">
                      <span className="cert-org">{t('bscp_org')}</span>
                      <span className="cert-date">{t('bscp_date')}</span>
                    </div>
                  </div>
                  
                  <div className="cert-item">
                    <span className="cert-title">{t('ejpt_title')}</span>
                    <div className="cert-info">
                      <span className="cert-org">{t('ejpt_org')}</span>
                      <span className="cert-date">{t('ejpt_date')}</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeAndAbout;