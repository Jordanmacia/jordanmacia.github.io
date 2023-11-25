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
              description="HackTheBox et TryHackMe sont deux plateformes sur lesquelles je m'entraîne régulièrement, en affrontant des environnements réels qui présentent diverses situations et défis, tels que l'exploitation de vulnérabilités, la résolution d'énigmes de sécurité et l'élévation de privilèges. Ces expériences me permettent d'améliorer mes compétences en cybersécurité et d'être prêt pour des situations du monde réel."
              cubeLink="https://app.hackthebox.com/profile/1345367"
              cloudLink="https://tryhackme.com/p/jord4n"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cours d'Initiation au Hacking"
              description="Ce cours a pris environ 150 heures de mon temps. Malgré son caractère introductif, il m'a fourni une base solide pour débuter dans le monde du hacking éthique. J'ai acquis une compréhension solide et pris des notes très utiles avec Obsidian, qui se trouvent dans la section 'Prise de Notes'. J'ai tout appris, des scans de réseau, y compris l'identification des appareils, l'énumération des domaines, sous-domaines, fichiers et technologies web, à l'identification des ports, puis à l'énumération des services courants et des systèmes de gestion de contenu tels que FTP, SSH, WordPress et Joomla. J'ai également exploré des concepts spécifiques, tels que l'utilisation d'environnements Docker, une connaissance approfondie des 10 premières vulnérabilités de l'OWASP et d'autres vulnérabilités web. J'ai acquis des connaissances sur les techniques d'élévation de privilèges, les bases du dépassement de tampon et j'ai résolu cinq machines présentant des vulnérabilités différentes pendant le cours. En tant que matériel supplémentaire, j'ai exploré l'utilisation de Metasploit, SQLMAP et des techniques de pivot. En conclusion, j'ai appris à rédiger des rapports en utilisant LaTeX."
              courseLink="https://hack4u.io/cursos/introduccion-al-hacking/"
              notesLink="https://hacking-notes-jordan.gitbook.io/notes/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cours d'Initiation à Linux"
              description="Ce cours m'a pris environ 40 heures pour le terminer, au cours duquel j'ai appris toutes les bases de Linux, y compris les commandes, l'interprétation des autorisations normales et SUID, l'utilisation de cron pour les tâches planifiées, le chiffrement de fichiers de données et binaires, l'encodage et le décodage, ainsi que la gestion des clés et des connexions SSH. J'ai également réalisé un projet final qui consistait à écrire des scripts Bash pour simuler deux techniques célèbres utilisées dans les casinos : le Martingale et l'Inverse La Brouchere. Le but était de défier la roulette du casino, et pour y parvenir, j'ai développé et défini la logique de plusieurs techniques couramment utilisées. L'objectif ultime était de déterminer si ces techniques sont véritablement efficaces et de démontrer finalement que, en fin de compte, la maison a toujours l'avantage."
               courseLink="https://hack4u.io/cursos/introduccion-a-linux/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Scripts d'Exploitation Web"
              description="Pendant mon cours d'initiation au hacking, j'ai développé plusieurs scripts qui automatisent les processus nécessaires pour pratiquer la programmation en Python et en Bash liée aux 10 premières vulnérabilités de l'OWASP, ainsi qu'à d'autres vulnérabilités web."
              ghLink="https://github.com/Jordanmacia/Web-Exploit-Scripts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Certification eJPT"
              description="Mon objectif pour 2024 est d'obtenir la certification EJPTv2, ce qui implique de démontrer mon expertise dans l'identification et la résolution de vulnérabilités, la protection des réseaux et la gestion des menaces en cybersécurité. De plus, cela me permettra de progresser dans ma carrière en cybersécurité et de contribuer de manière plus efficace à la sécurité de l'information et en ligne."
              certificationLink="https://security.ine.com/certifications/ejpt-certification/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;