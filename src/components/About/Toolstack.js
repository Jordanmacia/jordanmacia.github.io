import React from "react";
import { Col, Row } from "react-bootstrap";

// Importa las imágenes con rutas absolutas
import NmapIcon from "../../Assets/Projects/Nmap.png";
import BurpIcon from "../../Assets/Projects/Burpsuite.png";
import MetaIcon from "../../Assets/Projects/Metasploit.png";
import SqlIcon from "../../Assets/Projects/sqlmap.png";

// Enlaces de las herramientas
const toolLinks = [
  { icon: NmapIcon, alt: "Nmap Icon", link: "https://nmap.org/" },
  { icon: BurpIcon, alt: "Burp Icon", link: "https://portswigger.net/burp" },
  { icon: MetaIcon, alt: "Meta Icon", link: "https://www.metasploit.com/" },
  { icon: SqlIcon, alt: "Sql Icon", link: "https://sqlmap.org/" },
];

function Toolstack() {
  const iconStyle = {
    width: "100px", // Tamaño para la imagen
    height: "100px", // Tamaño para la imagen
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolLinks.map((item, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt={item.alt} style={iconStyle} />
          </a>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
