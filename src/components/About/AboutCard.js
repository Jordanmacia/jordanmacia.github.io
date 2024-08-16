import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Jordan MACIA</span>
            <br /> J'ai <span className="purple">20 ans</span> et je suis né en Andorre 🇦🇩, un micro-état où j'ai toujours vécu jusqu'à il y a deux ans. 
            <br/> Mes langues maternelles sont l'<span className="purple">espagnol</span> et le <span className="purple">catalan</span>, ma langue scolaire est le <span className="purple">français</span> et j'ai également un bon niveau en <span className="purple">anglais</span>.
            <br /><br />  Actuellement diplomé d'un<i> <b className="purple"> BTS SIO option SISR </b></i>ou j'ai aquis des compétences tel que:
            <br />- Administration système et réseau
            <br />- Sécurisation des SI
            <br />- Développement (Python, PHP, JavaScript...)
            <br />- Base de données (MySQL)

            <br /> <br />Pour la rentrée de 2024, j'ai l'intention de m'inscrire en <span className="purple">3ème année </span> d'études en <span className="purple"> Alternance</span>.
            Mon objectif académique est d'obtenir un Master en cybersécurité.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;