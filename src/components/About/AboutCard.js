import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Jordan MACIA</span>
            <br /> J'ai <span className="purple">19 ans</span> et je suis né en Andorre 🇦🇩, un micro-état où j'ai toujours vécu jusqu'à il y a deux ans. 
            <br/> Mes langues maternelles sont l'<span className="purple">espagnol</span> et le <span className="purple">catalan</span>, ma langue scolaire est le <span className="purple">français</span> et j'ai également un bon niveau en <span className="purple">anglais</span>.
            <br /><br />  Actuellement en deuxième année de <i> <b className="purple"> BTS SIO option SISR </b></i>ou j'ai aquis des compétences tel que:
            <br />- Administration système et réseau
            <br />- Sécurisation des SI
            <br />- Développement (Python, PHP, JavaScript...)
            <br />- Base de données (MySQL)

            <br /> <br />L'année à venir, j'ai l'intention de rejoindre une <span className="purple">Licence 3</span> en <span className="purple"> Alternance</span>.
            Mon objectif académique est d'obtenir un Master en cybersécurité.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;