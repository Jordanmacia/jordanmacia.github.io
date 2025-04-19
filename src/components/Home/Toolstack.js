import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaCube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import myImg from "../../Assets/jordan.png";
import Tilt from "react-parallax-tilt";  


function SocialLinks() {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center"> {/* Centrer la Row */}
      <h1 className="text-center" style={{ marginTop: "15px", color: "white" }}><b>{t('find_me_on')}</b></h1> {/* Ajout de marginTop pour éloigner le titre de la photo */}
      <br /> 
      <Col md={3} style={{ paddingBottom: 40, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Tilt
          scale={1.05}
          style={{ maxHeight: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <img
            src={myImg}
            alt="photo d'accueil"
            className="img-fluid"
            style={{ maxHeight: "300px", display: "block", margin: "auto" }}
          />
        </Tilt>
      </Col>
      <Col md={12} className="home-about-social" style={{ marginTop: "-50px" }}> 
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/jordanmacia/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:jordanmacia@protonmail.com"
              className="icon-colour home-social-icons"
            >
              <MdEmail />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://app.hackthebox.com/profile/1345367"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaCube />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://github.com/jordanmacia"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
}


export { SocialLinks };