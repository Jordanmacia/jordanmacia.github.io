import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaCube } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <h3> {t('all_rights')} Jordan {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jordanmacia/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:jordanmacia@protonmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
           
            <li className="social-icons">
            <a
            href="https://app.hackthebox.com/profile/1345367"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaCube />
            </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/jordanmacia"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
