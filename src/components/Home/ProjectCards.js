import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaCube, FaCloud, FaStickyNote, FaGraduationCap } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './ProjectCards.css';

const highlightKeywords = (text) => {
  // Si es un elemento React, lo devolvemos tal cual
  if (React.isValidElement(text)) {
    return text;
  }

  if (typeof text !== 'string') return text;

  // Palabras importantes por proyecto
  const keywords = [
    // Plataformas y marcas
    'HackTheBox',
    'EJPTv2',
    'eWPT',
    'Asterisk',
    'API Cloud Azure',
    'Google',

    // Términos técnicos multilingües
    'pentesting',
    'vulnerabilités',
    'vulnerabilidades',
    'vulnerabilities',
    'vulnerabilitats',
    'Buffer overflow',
    'STT',
    'TTS',
    'IA',
    'AI',

    // Francés
    'cybersécurité offensive',
    'Reconnaissance',
    'Failles de services et gestionnaires de contenu',
    'OWASP TOP 10 et vulnérabilités web',
    'Élévation de privilèges',
    'Résolution de 5 machines vulhub',
    'Outils additionnels',
    'Rédaction de rapports',

    // Español
    'ciberseguridad ofensiva',
    'Reconocimiento',
    'Vulnerabilidades de servicios y CMS',
    'OWASP TOP 10 y vulnerabilidades web',
    'Elevación de privilegios',
    'Resolución de 5 máquinas vulhub',
    'Herramientas adicionales',
    'Documentación',

    // Catalán
    'ciberseguretat ofensiva',
    'Reconeixement',
    'Vulnerabilitats de serveis i CMS',
    'OWASP TOP 10 i vulnerabilitats web',
    'Elevació de privilegis',
    'Resolució de 5 màquines vulhub',
    'Eines addicionals',

    // Inglés
    'offensive cybersecurity',
    'Reconnaissance',
    'Service and CMS vulnerabilities',
    'OWASP TOP 10 and web vulnerabilities',
    'Privilege Escalation',
    'Resolution of 5 Vulhub machines',
    'Additional tools',
    'Documentation'
  ];

  // Primero manejamos los saltos de línea
  const lines = text.split('\n');
  
  // Procesamos cada línea
  const processedLines = lines.map(line => {
    let processedLine = line;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'g');
      processedLine = processedLine.replace(regex, '<span class="highlight-text">$1</span>');
    });
    return processedLine;
  });

  // Unimos las líneas con <br /> para mantener el formato
  const processedText = processedLines.join('<br />');
  
  return <div dangerouslySetInnerHTML={{ __html: processedText }} />;
};

function ProjectCards(props) {
  const { t } = useTranslation();
  const {
    imgPath,
    title,
    description,
    ghLink,
    isBlog,
    demoLink,
    cubeLink,
    cloudLink,
    notesLink,
    courseLink,
    certificationLink,
    alwaysShowDescription,
    isLinuxCourse,
    isHackingCourse,
  } = props;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const truncatedDescription = typeof description === 'string' ? 
    description.split('\n')[0] + "..." : 
    description;

  const shouldShowFullDescription =
    alwaysShowDescription || isLinuxCourse || isHackingCourse;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="project-content-wrapper">
          <div className="card-text" style={{ 
            textAlign: "justify",
            transition: 'all 0.3s ease',
            maxHeight: shouldShowFullDescription || showFullDescription ? '1000px' : '100px',
            overflow: 'hidden'
          }}>
            {highlightKeywords(shouldShowFullDescription || showFullDescription ? description : truncatedDescription)}
          </div>

          {!shouldShowFullDescription && (
            <Button 
              variant="outline-primary" 
              onClick={toggleDescription} 
              className="more-info-button"
              style={{ 
                marginTop: '1rem',
                marginBottom: '1rem',
                borderRadius: '20px',
                padding: '0.5rem 1.5rem',
                transition: 'all 0.3s ease',
                width: 'auto',
                minWidth: '140px'
              }}
            >
              {showFullDescription ? t('view_less') : t('more_info')}
            </Button>
          )}
        </div>

        <div className="mt-3" style={{ 
          display: 'flex', 
          gap: '10px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {ghLink && (
            <Button variant="primary" href={ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {demoLink && (
            <Button variant="primary" href={demoLink} target="_blank">
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
          {cubeLink && (
            <Button variant="primary" href={cubeLink} target="_blank">
              <FaCube /> &nbsp;
              {"HTB"}
            </Button>
          )}
          {cloudLink && (
            <Button variant="primary" href={cloudLink} target="_blank">
              <FaCloud /> &nbsp;
              {"Cloud"}
            </Button>
          )}
          {notesLink && (
            <Button variant="primary" href={notesLink} target="_blank">
              <FaStickyNote /> &nbsp;
              {"Notes"}
            </Button>
          )}
          {courseLink && (
            <Button variant="primary" href={courseLink} target="_blank">
              <FaGraduationCap /> &nbsp;
              {"Course"}
            </Button>
          )}
          {certificationLink && (
            <Button variant="primary" href={certificationLink} target="_blank">
              <FaGraduationCap /> &nbsp;
              {"Certification"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
