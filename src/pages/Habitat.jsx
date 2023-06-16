import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Habitat.css";
import "../index.css";
import { auto } from "@popperjs/core";
import style from "./Habitat.css";

function Habitat() {
  const [Habiat, setHabitat] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7106/api/habitat")
      .then((response) => response.json())
      .then((data) => setHabitat(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="main">
      <header className="contacto-header">
        <h1 className="contacto-title">Habitat</h1>
        <p className="contacto-description">
          Descubre la maravillosa diversidad de los hábitats naturales de
          nuestro zoológico
        </p>
      </header>

      <Container
        fluid
        style={{ margin: "0px", marginTop: "20px" }}
        className={style.Container}
      >
        <Row className="justify-content-center">
          {Habiat.map((habitat) => (
            <Col className="mb-4 item" key={habitat.nombre}>
              <img
                className="img-fluid"
                src={habitat.imagen}
                alt={habitat.nombre}
                style={{
                  width: "-webkit-fill-available",
                  height: "auto",
                  margin: "0px",
                }}
              />
              <h2
                style={{
                  color: "var(--MediumGreen)",
                  margin: "0px",
                  marginBottom: "20px",
                  paddingTop: "0px",
                  textAlign: "center",
                }}
              >
                {habitat.nombre}
              </h2>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Habitat;
