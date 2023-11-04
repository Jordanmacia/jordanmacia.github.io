import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiLinux,
  DiWindows,
} from "react-icons/di";


import bashImage from "../../Assets/Projects/bash.png"; // Ruta relativa al archivo de imagen

function Techstack() {
  const logoSize = "90px"; // Tamaño deseado para los logos

  const renderTechIcon = (icon, altText) => (
    <Col xs={4} md={2} className="tech-icons">
      {icon({ style: { fontSize: logoSize } })}
    </Col>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {renderTechIcon(DiLinux, "Linux")}
      {renderTechIcon(DiWindows, "Windows")}
      {renderTechIcon(DiPython, "Python")}
      <Col xs={4} md={2} className="tech-icons">
        <img src={bashImage} alt="Bash Shell" style={{ width: logoSize, height: logoSize }} />
      </Col>
    </Row>
  );
}

export default Techstack;
