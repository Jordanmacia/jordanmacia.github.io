import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jordan.png";
import homeLogo from "../../Assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 
import { FaCube } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple"><b>PRÉSENTER</b></span>
            </h1>
            <p className="home-about-body">
            <b><span className="purple">Jordan Macia De Las Heras</span></b>

            <br /> J'ai <span className="purple">20 ans</span> et je suis né en Andorre 🇦🇩, un micro-état où j'ai toujours vécu jusqu'à il y a trois ans. 
            <br/> Mes langues maternelles sont l'<span className="purple">espagnol</span> et le <span className="purple">catalan</span>, ma langue scolaire est le <span className="purple">français</span> et j'ai également un bon niveau en <span className="purple">anglais</span>.
            <br/><br/>Étudiant en troisième année 
            
                <b className="purple">  Bachelor </b>
            
            , option
            
                <b className="purple">  Cybersécurité </b>
           
            à
           
                <b className="purple">  Ynov Campus </b> Toulouse, abordant des disciplines telles que :
            
            <ul>
            <br />

              <li>Pentesting</li>
              <li>Gouvernance de la sécurité</li>
              <li>Sécurité des systèmes d'exploitation et des services</li>
              <li>DevOps</li>
            </ul>
         <br />  Actuellement diplômé d'un <b className="purple"> BTS SIO option SISR </b>ou j'ai acquis des compétences tel que:
         <ul>
            <br />

              <li>Administration système et réseau</li>
              <li>Sécurisation des SI</li>
              <li>Développement (Python, PHP, JavaScript...)</li>
              <li>Bases de données (MySQL)</li>
            </ul>

    
              <br />
              Pour la rentrée de 2025, j'ai l'intention de m'inscrire en<b> <span className="purple">Master Expert Cybersécurité</span></b> en <b><span className="purple">Alternance</span></b>, avec pour objectif de devenir un expert en cybersécurité, spécialisé dans l'aspect offensif, souvent désigné sous le nom de Pentester ou Red Teaming.
            </p>
          </Col>
          
          <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="photo d'accueil"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><b>TROUVEZ-MOI SUR</b></h1>
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
                  <MdEmail /> {/* Use the email icon */}
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://app.hackthebox.com/profile/1345367"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                <FaCube /> {/* Reemplaza AiFillInstagram por FaCube */}
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
      </Container>
    </Container>
  );
}

export default Home2;
