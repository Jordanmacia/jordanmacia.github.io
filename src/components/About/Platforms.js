import React from "react";
import { Col, Row } from "react-bootstrap";

// Importa las imágenes con rutas absolutas
import HackpIcon from "../../Assets/Projects/Hackthebox.png";
import VulnIcon from "../../Assets/Projects/Vulnhub.png";
import PortIcon from "../../Assets/Projects/Portswigger.png";

const icons = [
  { icon: HackpIcon, alt: "Hack Icon" },
  { icon: VulnIcon, alt: "Vuln Icon" },
  { icon: PortIcon, alt: "Port Icon" },
];

function Platforms() {
  const iconStyle = {
    width: "100px", // Tamaño para la imagen
    height: "100px", // Tamaño para la imagen
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((item, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <img src={item.icon} alt={item.alt} style={iconStyle} />
        </Col>
      ))}
    </Row>
  );
}

export default Platforms;
