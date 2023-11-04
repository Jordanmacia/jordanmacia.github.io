import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello my name is <span className="purple">Jordan Macia</span> !
          <br /> I'm <span className="purple">19 years old</span> and I was born in Andorra 🇦🇩, a microstate where I've always lived until two years ago.
          <br /><br />Currently, I'm in my second year of university studies in <span className="purple">Toulouse </span>France pursuing a <span className="purple">BTS SIO SISR at Lycée Ozenne. </span> . 
          <br /> My goal is to stay in France at least until I complete my Master's in cybersecurity. 
          <br /> <br />  Next year, I'd like to continue with a <span className="purple">Licence 3</span>, Degree in SISR in Toulouse but in an <span className="purple">Alternance</span> format, 
          working at a company where I can learn and gain new knowledge related to my passion, which is ethical hacking.
     
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
