import React from "react";
import { Col, Row } from "react-bootstrap";

// Importa las imágenes con rutas absolutas
import HackpIcon from "../../Assets/Projects/Hackthebox.png";
import VulnIcon from "../../Assets/Projects/Vulnhub.png";
import PortIcon from "../../Assets/Projects/Portswigger.png";

// Les liens vers les plateformes respectives
const icons = [
  { icon: HackpIcon, alt: "Hack Icon", link: "https://www.hackthebox.com/" },
  { icon: VulnIcon, alt: "Vuln Icon", link: "https://www.vulnhub.com/" },
  { icon: PortIcon, alt: "Port Icon", link: "https://portswigger.net/web-security/all-labs" },
];

function Platforms() {
  const iconStyle = {
    width: "100px", // Taille pour l'image
    height: "100px", // Taille pour l'image
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((item, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt={item.alt} style={iconStyle} />
          </a>
        </Col>
      ))}
    </Row>
  );
}

export default Platforms;
