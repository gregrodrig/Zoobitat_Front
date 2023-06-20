import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GrMapLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Actividades.css";
import Encabezado from "components/header/Encabezado";

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
  const [actividades, setActividades] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7106/api/Actividades/actividades/semana-actual")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActividades(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!actividades) {
    return <div>No hay actividades</div>;
  }

  return (
    <div className="main">
      <Encabezado
        titulo={"ACTIVIDADES"}
        info={
          "Explora el fascinante mundo de la vida silvestre disfrutando de nuestras actividades."
        }
      />

      <div className="detailsContainer">
        {actividades.map((act) => (
          <div className="actividadContainer" key={act.id}>
            <Container>
              <Link to="/actividadDetails" className="link">
                <Row>
                  <Col>
                    <img
                      style={{
                        marginRight: "-5px",
                        borderRadius: "6px",
                        height: "100px",
                        width: "100px",
                        marginBottom: "7px",
                      }}
                      className="actividadImage"
                      src={act.foto}
                      alt={act.titulo}
                    />
                  </Col>
                  <Col>
                    <div className="actividadDetailsContainer">
                      <div className="firstItem">
                        <p>
                          <strong>{act.titulo}</strong>
                        </p>
                      </div>
                      <div className="information">
                        <p>
                          <span>{act.descripcion}</span>
                        </p>
                        <div>
                          <p className="dateAndplace">
                            <GrMapLocation
                              style={{ marginRight: "5px", color: "#C0D904" }}
                            />
                            {`${act.ubicacion.nombre} - `}
                            <MdDateRange
                              style={{ marginRight: "5px", color: "#C0D904" }}
                            />
                            {formatDate(act.fecha)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actividades;
