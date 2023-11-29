import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Travaux Récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai récemment travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HackTheBox & TryHackMe"
              description={
                <div style={{ color: "white" }}>
                <strong className="purple">HackTheBox </strong> et <strong className="purple">TryHackMe</strong> et  sont deux plateformes sur lesquelles je m'entraîne régulièrement, en affrontant des environnements réels qui présentent diverses situations et défis, tels que l'exploitation de vulnérabilités, la résolution d'énigmes de sécurité et l'élévation de privilèges.        
                </div>
              }
              cubeLink="https://app.hackthebox.com/profile/1345367"
              cloudLink="https://tryhackme.com/p/jord4n"
            />
          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={bitsOfCode}
    isBlog={false}
    title="Cours d'Initiation au Hacking"
    description={
      <div style={{ color: "white" }}>
        J'ai consacré environ 150 heures à ce cours avec beaucoup de pratique duquel j'ai exploré divers domaines:
        <br /><br />
        -  <strong className="purple">Reconnaissance </strong> : Exploration du réseau, énumération web, identification des technologies web, etc.
        <br />
        - <strong className="purple">Failles de services et gestionnaires de contenu </strong> : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.
        <br />
        - <strong className="purple">OWASP TOP 10 et vulnérabilités web </strong> : SQLI, XSS, XXE, LFI, NoSQL, abus d'API, etc.
        <br />
        - <strong className="purple">Élévation de privilèges </strong> : Sudoers, SUID, PATH Hijacking, Kernel, et les groupes spéciaux, etc.
        <br />
        -  <strong className="purple">Buffer overflow </strong> : J'ai acquis une compréhension approfondie de la technique du buffer overflow.
        <br />
        - <strong className="purple">Résolution de 5 machines vulhub </strong> : J'ai mis en pratique mes connaissances avec cinq machines vulhub.
        <br />
        - <strong className="purple">Outils additionnels </strong> : J'ai été introduit à des outils supplémentaires tels que Metasploit, SQLmap et les techniques de pivoting.
        <br />
        - <strong className="purple">Rédaction de rapports </strong> : Acquisition de compétences dans la rédaction de rapports professionnels en utilisant LaTeX.
      </div>
    }
    courseLink="https://hack4u.io/cursos/introduccion-al-hacking/"
    notesLink="https://hacking-notes-jordan.gitbook.io/notes/"
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cours d'Initiation à Linux"
              description={
      <div style={{ color: "white" }}>
      J'ai dédié environ 40 heures à ce cours, au cours duquel j'ai exploré divers domaines, notamment :
        <br /><br />
        -  <strong className="purple">Bases de Linux </strong>: Commandes principales, Interprétation des droits normaux et SUID, Utilisation de cron pour les tâches planifiées, Chiffrement de fichiers de données et binaires, Encodage et décodage, Gestion des clés et des connexions SSH.
        <br />
        <br /> 
        - <strong className="purple">Projet script Bash</strong> : Création d'une simulation de deux techniques célèbres utilisées dans les casinos (Martingale/Inverse La Brouchere). 
        <br />    Objectif : déterminer l'efficacité réelle de ces techniques et démontrer que, en fin de compte, le casino a toujours l'avantage.

        <br />
      </div>
    }
    courseLink="https://hack4u.io/cursos/introduccion-a-linux/"
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Scripts d'Exploitation Web"
              description={
                <div style={{ color: "white" }}>
                Pendant mon cours d'initiation au hacking, j'ai développé plusieurs scripts qui 
                <strong className="purple"> automatisent les processus </strong> nécessaires pour pratiquer la programmation en <strong className="purple"> Python</strong> et en <strong className="purple"> Bash</strong>  liée aux 10 premières vulnérabilités de l'OWASP, ainsi qu'à d'autres vulnérabilités web.
                 
                </div>
              }
              ghLink="https://github.com/Jordanmacia/Web-Exploit-Scripts"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Certification eJPT"
              description={
                <div style={{ color: "white" }}>
                Mon objectif pour 2024 est d'obtenir la certification <strong className="purple">EJPTv2 </strong>, ce qui implique de démontrer mon expertise dans l'identification et la résolution de vulnérabilités, la protection des réseaux et la gestion des menaces en cybersécurité.                 
                </div>
              }
              certificationLink="https://security.ine.com/certifications/ejpt-certification/"              />
          </Col>
        </Row>
      </Container>
    </Container>
  );              

}
export default Projects;