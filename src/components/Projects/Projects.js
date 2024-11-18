import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/scripts.png";
import editor from "../../Assets/Projects/introduction-linux.png";
import chatify from "../../Assets/Projects/htb.png";
import suicide from "../../Assets/Projects/ejpt.png";
import bitsOfCode from "../../Assets/Projects/introduction-hacking.png";
import HackingNotes from "../../Assets/Projects/Hacking-notes.png";

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
              title={<strong>Plateforme Entrainement</strong>}
              description={
                <div style={{ color: "white" }}>
                  <strong className="purple">HackTheBox </strong> est une
                  plateforme sur laquelle je m'entraîne régulièrement, en
                  affrontant des environnements réels qui présentent diverses
                  situations et défis, tels que l'exploitation de vulnérabilités,
                  la résolution d'énigmes de sécurité et l'élévation de privilèges.
                </div>
              }
              cubeLink="https://hackthebox.com/"
              alwaysShowDescription={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HackingNotes}
              isBlog={false}
              title={<strong>Hacking Notes</strong>}
              description={
                <div style={{ color: "white" }}>
                  Voici mon site web, où je centralise mes {" "}
                  <strong className="purple">notes et procédures </strong>
                  consacrées à la cybersécurité offensive.
                  Ces ressources régulièrement {" "}
                  <strong className="purple">mises à jour</strong>, offrent une base de référence complète et évolutive.
                  
                </div>
              }
              notesLink="https://hacking-notes.jord4n.pro/"
              alwaysShowDescription={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title={<strong>Certification eJPT</strong>}
              description={
                <div style={{ color: "white" }}>
                  Mon objectif pour 2025 est d'obtenir la certification{" "}
                  <strong className="purple">EJPTv2 </strong>, ce qui implique de
                  démontrer mon expertise dans l'identification et la résolution
                  de vulnérabilités, la protection des réseaux et la gestion des
                  menaces en cybersécurité.
                </div>
              }
              certificationLink="https://security.ine.com/certifications/ejpt-certification/"
              alwaysShowDescription={true}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={<strong>Cours d'Initiation au Hacking</strong>}
              description={
                <div style={{ color: "white" }}>
                  J'ai investi environ 150 heures dans ce cours, explorant divers domaines et beaucoup de pratique:


                  <br />
                  <br />
                  - <strong className="purple">Reconnaissance </strong> :
                  Exploration du réseau, énumération web, identification des
                  technologies web, etc.
                  <br />
                  - <strong className="purple">Failles de services et gestionnaires de contenu </strong> : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.
                  <br />
                  - <strong className="purple">OWASP TOP 10 et vulnérabilités web </strong> : SQLI, XSS, XXE, LFI, NoSQL, abus d'API, etc.
                  <br />
                  - <strong className="purple">Élévation de privilèges </strong> : Sudoers, SUID, PATH Hijacking, Kernel, et les groupes spéciaux, etc.
                  <br />
                  - <strong className="purple">Buffer overflow </strong> : J'ai acquis une compréhension approfondie de la technique du buffer overflow.
                  <br />
                  - <strong className="purple">Résolution de 5 machines vulhub </strong> : J'ai mis en pratique mes connaissances avec cinq machines vulhub.
                  <br />
                  - <strong className="purple">Outils additionnels </strong> : J'ai été introduit à des outils supplémentaires tels que Metasploit, SQLmap et les techniques de pivoting.
                  <br />
                  - <strong className="purple">Rédaction de rapports </strong> : Acquisition de compétences dans la rédaction de rapports professionnels en utilisant LaTeX.
                </div>
              }              
              courseLink="https://hack4u.io/cursos/introduccion-al-hacking/"
              notesLink="https://hacking-notes.jord4n.pro/web/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={<strong>Cours d'Initiation à Linux</strong>}
              description={
                <div style={{ color: "white" }}>
                  J'ai dédié environ 40 heures à ce cours, au cours duquel j'ai
                  exploré divers domaines, notamment:
                  <br />
                  <br />
                  - <strong className="purple">Bases de Linux </strong>: Commandes
                  principales, Interprétation des droits normaux et SUID,
                  Utilisation de cron pour les tâches planifiées, Chiffrement de
                  fichiers de données et binaires, Encodage et décodage, Gestion
                  des clés et des connexions SSH.
                  <br />
                  <br />
                  - <strong className="purple">Projet script Bash</strong> :
                  Création d'une simulation de deux techniques célèbres utilisées
                  dans les casinos (Martingale/Inverse La Brouchere). <br />{" "}
                  Objectif : déterminer l'efficacité réelle de ces techniques et
                  démontrer que, en fin de compte, le casino a toujours
                  l'avantage.
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
              title={<strong>Scripts d'Exploitation Web</strong>}
              description={
                <div style={{ color: "white" }}>
                  Pendant mon cours d'initiation au hacking, j'ai développé
                  plusieurs scripts pour automatiser les processus liés aux
                  vulnérabilités OWASP TOP 10.
                </div>
              }
              ghLink="https://github.com/Jordanmacia/Web-Exploit-Scripts"
              alwaysShowDescription={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
