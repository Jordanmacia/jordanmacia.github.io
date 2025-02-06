import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import hackerAnimation from "../../Assets/hacker.json";
import Type from "./Type";
import Lottie from "lottie-react";  // Asegúrate de importar Lottie

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, marginLeft: "-5px" }} className="heading">
                Salut!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Jordan</strong>
              </h1>
              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* Usando Lottie para la animación */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <Lottie
                animationData={hackerAnimation}
                loop
                autoplay
                style={{
                  height: "500px",
                  width: "500px",
                  marginLeft: "-75px", // Ajuste para mover a la izquierda
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
