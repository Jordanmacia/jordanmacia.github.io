import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <p>
                Je consacre une part importante de mon temps libre à l'autoformation, notamment en suivant des cours en ligne proposés par 
                <i><b className="purple"> HTB Academy</b></i> et la plateforme 
                <i><b className="purple"> Hack4u.io</b></i>.
              </p>

              <p>Parmi les formations suivies :</p>
              <ul>
            <li><b className="purple">Introduction</b> au Hacking</li>
            <li>Hacking (<i><b className="purple">Web</b></i>)</li>
            <li>Hacking (<i><b className="purple">Active Directory</b></i>)</li>
          </ul>

              <br />

              Je m'entraîne également sur des machines configurées dans des environnements vulnérables réels via des plateformes comme
              <i>
                <b className="purple"> HackTheBox, VulHub, PortSwigger et TryHackMe. </b>
              </i>
              <br />
              Plus de détails sont disponibles dans la section des projets.
              
              <br />
              <br />
              

  
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;