import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { GrMapLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import log from "loglevel";
import axios from "axios";
import "./Actividades.css";
import "./../index.css";
import miVariableGlobal from "../global.js";
import { Empty } from "components/emptyMsg/Empty";
import { BiNoEntry } from "react-icons/bi";

function formatDate(dateTimeString) {
  const dateObject = new Date(dateTimeString);
  const formattedDate = dateObject.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formattedDate;
}

function Actividades() {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    log.info("Página lista de Actividades  visitada");
    sendLogToServer("Página Actividades visitada");

    fetch(`${miVariableGlobal}Actividades/actividades/semana-actual`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActividades(data);
      })
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
            section: "Actividades",
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
    if (sessionStorage.getItem("token")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("token")}`;
    }
    axios
      .post(`${miVariableGlobal}logs`, {
        message: logMessage,
        level: "INFO",
        section: "Actividades",
        IdUsuario: 4,
        Usuario: null,
      })
      .then((response) => {
        console.log("Log enviado al servidor");
      })
      .catch((error) => {
        console.error("Error al enviar el log al servidor", error);
      });
  }

  return (
    <>
      {!actividades || actividades.length === 0 ? (
        <Col style={{ margin: "2rem" }}>
          <Empty msg="msgDatosNoCargados" />
        </Col>
      ) : (
        <>
          <div className="main">
            <header className="actividad-header mb-5">
              <h1 className="actividad-title">Actividades</h1>
              <p className="actividad-description">
                Explora el fascinante mundo de la vida silvestre disfrutando de
                nuestras actividades.
              </p>
            </header>
            {actividades.map((act, index) => (
              <Card
                key={index}
                className="mb-3"
                style={{
                  border: "none",
                  margin: "0 3rem",
                  background: "var(--background)",
                }}
              >
                <Link to="" className="link">
                  <Row>
                    <Col xs={3} style={{ margin: "auto" }}>
                      <Card.Img
                        key={act.id}
                        className="img-fluid"
                        style={{
                          width: "50%",
                          height: "auto",
                          borderRadius: "0.75rem",
                        }}
                        src={act.foto}
                        alt={act.titulo}
                      />
                    </Col>
                    <Col
                      xs={7}
                      style={{
                        textAlign: "start",
                        margin: "auto",
                        padding: "0.75rem",
                      }}
                    >
                      <Card.Title
                        className="mb-3"
                        style={{
                          color: "var(--DarkGreen)",
                          fontSize: "x-large",
                        }}
                      >
                        {act.titulo}
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-3">
                        {act.descripcion}
                      </Card.Subtitle>
                      <Card.Subtitle className="text-muted">
                        <GrMapLocation
                          style={{
                            marginRight: "5px",
                            color: "var(--LightGreen)",
                          }}
                        />
                        {`${act.ubicacion.nombre} - `}
                        <MdDateRange
                          style={{
                            marginRight: "5px",
                            color: "var(--LightGreen)",
                          }}
                        />
                        {formatDate(act.fecha)}
                      </Card.Subtitle>
                    </Col>
                  </Row>
                </Link>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Actividades;
