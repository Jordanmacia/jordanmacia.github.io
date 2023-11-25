import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je m'appelle <span className="purple">Jordan MACIA</span> !
            <br /> J'ai <span className="purple">19 ans</span> et je suis né en Andorre 🇦🇩, un micro-état où j'ai toujours vécu jusqu'à il y a deux ans. Donc, mes langues maternelles sont l'espagnol et le catalan, ma langue scolaire est le français depuis la primaire, et j'ai également un niveau B2 en anglais.
            <br /><br />Actuellement, je suis en deuxième année d'études universitaires à <span className="purple">Toulouse</span>, en France, où je poursuis un <span className="purple">BTS SIO SISR au Lycée Ozenne.</span>
            <br />Mon objectif est de rester en France au moins jusqu'à l'obtention de mon Master en cybersécurité.
            <br /> <br /> L'année prochaine, j'aimerais continuer avec une <span className="purple">Licence 3</span>, en SISR à Toulouse, mais sous forme d'<span className="purple"> Alternance</span>,
            en travaillant dans une entreprise où je pourrais apprendre et acquérir de nouvelles connaissances liées à ma passion, qui est le piratage éthique.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;