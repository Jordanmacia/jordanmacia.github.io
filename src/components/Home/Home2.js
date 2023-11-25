import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jordan.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
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
              PERMETTEZ-MOI DE ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
          
              Je suis actuellement en deuxième année de
              <i>
                <b className="purple"> BTS SIO option SISR au Lycée Ozenne </b>
              </i>
              à Toulouse, en France, où j'apprends les
              <i>
                <b className="purple"> réseaux informatiques, la cybersécurité, la programmation et l'administration système </b>
              </i>
              , ce qui me donne une base très solide.
              <br />
              <br />
            Depuis que je suis enfant, j'ai toujours aspiré à 
            <i>
                <b className="purple"> acquérir des compétences </b>
            </i>
               dans le domaine de la sécurité informatique, en comprenant les mécanismes de piratage tout en l'utilisant de manière
 <i>
                <b className="purple"> éthique </b>
            </i>
            et
            <i>
                <b className="purple"> contrôlée. </b>
            </i>
 Petit à petit, je vois ce rêve se concrétiser. 🤷🏻‍♂️
              <br />
             <br />
             Je consacre une grande partie de mon temps libre à l'auto-apprentissage, par exemple à travers des cours en ligne tels que
              <i>
                <b className="purple"> "Introduction au piratage éthique" ou "Linux et Bash avancé" sur la plateforme Hack4u.io </b>
              </i>
              <br />
              Je m'exerce également sur des machines configurées dans des environnements de vulnérabilité réelle via des plates-formes telles que
              <i>
                <b className="purple"> Hackthebox et TryHackMe. </b>
              </i>
              <br />
              Vous pouvez trouver plus d'informations sur ces intérêts dans la section des projets.
              <br />
              <br />Mon objectif est de devenir un expert en cybersécurité, avec un accent particulier sur l'aspect
              <i>
                <b className="purple"> offensif </b>
              </i>
              souvent désigné sous le nom de
              <i>
                <b className="purple"> red teaming </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jordanmacia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                   <AiFillGithub />
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
                  href="https://www.linkedin.com/in/jordanmacia/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;