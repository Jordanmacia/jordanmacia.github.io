import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a child, my 
            <i>
                <b className="purple"> life's dream </b>
            </i>
              was to learn how to hack everything, and now I'm making it happen,
            but always in an 
            <i>
                <b className="purple"> ethical   </b>
            </i>
            and 
            <i>
                <b className="purple"> controlled  </b>
            </i>
            way. 🤷🏻‍♂️
              <br />
              <br />My goal is to become an expert in cybersecurity, with a specific emphasis on the 
              <i>
                <b className="purple"> offensive aspect </b>
              </i>
              often referred to as
              <i>
                <b className="purple"> red teaming </b>
              </i>
              <br />
              <br />
              I am currently in the second year of 
              <i>
                <b className="purple"> BTS SIO option SISR at Lycée Ozenne  </b>
              </i>
              in Toulouse, France, where I learn about
              <i>
                <b className="purple"> computer networks, cybersecurity, programming and system administration </b>
              </i>
              , which provides me with a strong foundation
              <br />
              <br />
              In my free time, I dedicate a significant amount of time to self-education, taking courses like 
              <i>
                <b className="purple"> "Introduction to Hacking" or "Advanced Linux and Bash."  </b>
              </i>
              <br />
              I also practice on machines configured in real vulnerability environments through platforms like
              <i>
                <b className="purple"> Hackthebox and TryHackMe. </b>
              </i>
              <br />
              You can find more information about these interests in the projects section.
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
