import React, { useEffect, useState } from "react";
import { Container, Row, Col, CardImg, Card } from "react-bootstrap";
import "./Habitat.css";
import "../index.css";
import style from "./Habitat.css";
import { Link } from "react-router-dom";
import axios from "axios";
import miVariableGlobal from "../global.js";
import log from "loglevel";
import { Empty } from "components/emptyMsg/Empty";

function Habitat() {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    log.info("Página HabitatsList visitada ");
    sendLogToServer("Página HabitatsList visitada ");
    fetch(`${miVariableGlobal}habitat`)
      .then((response) => response.json())
      .then((data) => setHabitats(data))
      .catch((error) => {
        if (sessionStorage.getItem("token")) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${sessionStorage.getItem("token")}`;
        }
        axios
          .post(`${miVariableGlobal}logs`, {
            message: error,
            level: "ERROR",
            section: "Habitat",
            IdUsuario: 4,
            Usuario: null,
          })
          .then((response) => {
            console.log("Log enviado al servidor");
          })
          .catch((error) => {
            console.error("Error al enviar el log al servidor", error);
          });
      });
  }, []);

  function sendLogToServer(logMessage) {
    const token = sessionStorage.getItem("token");
    var headr = null;

    const config = {
      message: logMessage,
      level: "INFO",
      section: "Hbitatlstvisitante",
      IdUsuario: 4,
      Usuario: null,
    };

    // Verificar si el token existe en la sesión y agregarlo a la configuración
    if (sessionStorage.getItem("token")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("token")}`;
    }

    axios
      .post(`${miVariableGlobal}logs`, config)
      .then((response) => {
        console.log("Log enviado al servidor");
      })
      .catch((error) => {
        console.error("Error al enviar el log al servidor", error);
      });
  }

  return (
    <div className="main">
      <header className="contacto-header">
        <h1 className="contacto-title">Habitat</h1>
        <p className="contacto-description">
          Descubre la maravillosa diversidad de los hábitats naturales de
          nuestro zoológico
        </p>
      </header>
      {!habitats || habitats.length === 0 ? (
        <Col style={{ margin: "2rem" }}>
          <Empty msg="msgDatosNoCargados" />
        </Col>
      ) : (
        <Container
          fluid
          style={{ margin: "0px", marginTop: "20px" }}
          className={style.Container}
        >
          <Row className="justify-content-center">
            {habitats.map((habitat) => (
              <Col className="mb-4 item" key={habitat.nombre}>
                <Link to={`/habitat/${habitat.idHabitat}`}>
                  <Card.Img
                    className="img-fluid"
                    src={habitat.imagen}
                    alt={habitat.nombre}
                    style={{
                      width: "-webkit-fill-available",
                      height: "auto",
                      margin: "0px",
                      borderRadius: "0.75rem",
                    }}
                  />
                  <Card.Title
                    style={{
                      color: "var(--MediumGreen)",
                      margin: "1rem 0",
                      textAlign: "center",
                    }}
                  >
                    {habitat.nombre}
                  </Card.Title>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Habitat;
