import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiLinux,
  DiWindows,
} from "react-icons/di";

function Techstack() {
  const logoSize = "90px"; // Tamaño deseado para los logos

  const renderTechIcon = (icon, altText, link) => (
    <Col xs={4} md={2} className="tech-icons">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={altText}
        style={{ textDecoration: "none", color: "white" }} // Fuerza el color blanco
      >
        {icon({ style: { fontSize: logoSize } })}
      </a>
    </Col>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {renderTechIcon(DiLinux, "Linux", "https://parrotsec.org/")}
      {renderTechIcon(DiWindows, "Windows", "https://www.microsoft.com/en-us/windows")}
    </Row>
  );
}

export default Techstack;
