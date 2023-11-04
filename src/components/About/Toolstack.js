import React from "react";
import { Col, Row } from "react-bootstrap";

// Importa las imágenes con rutas absolutas
import NmapIcon from "../../Assets/Projects/Nmap.png";
import BurpIcon from "../../Assets/Projects/Burpsuite.png";
import MetaIcon from "../../Assets/Projects/Metasploit.png";
import SqlIcon from "../../Assets/Projects/sqlmap.png";
import WireIcon from "../../Assets/Projects/wireshark.png";

const icons = [
  { icon: NmapIcon, alt: "Nmap Icon" },
  { icon: BurpIcon, alt: "Burp Icon" },
  { icon: MetaIcon, alt: "Meta Icon" },
  { icon: SqlIcon, alt: "Sql Icon" },
  { icon: WireIcon, alt: "Wire Icon" },
];

function Toolstack() {
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

export default Toolstack;
