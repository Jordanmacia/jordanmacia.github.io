import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiLinux,
  DiWindows,
} from "react-icons/di";




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
    </Row>
  );
}

export default Techstack;
