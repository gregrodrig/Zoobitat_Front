import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./AnimalList.css";
import { Link } from "react-router-dom";
import "../../index.css";
import axios from "axios";
import miVariableGlobal from "../../global.js";

function AnimalList() {
  const [animalsData, setAnimalsData] = useState([]);
  const [isTruncated, setIsTruncated] = useState(true);
  const MAX_CHARACTERS = 150;
  const handleReadMoreClick = () => {
    setIsTruncated(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("token")}`;
    }

    fetch(`https://${miVariableGlobal}:7106/api/especie`)
      .then((response) => response.json())
      .then((data) => setAnimalsData(data))
      .catch((error) =>
        axios
          .post(`https://${miVariableGlobal}:7106/api/logs`, {
            message: error.message,
            level: "ERROR",
            section: "AnimalList",
            IdUsuario: 4,
            Usuario: null,
          })
          .then((response) => {
            console.log("Log enviado al servidor");
          })
          .catch((error) => {
            console.error("Error al enviar el log al servidor", error);
          })
      );
  }, []);
  return (
    <>
      <Row xs={1} md={2} className="g-4 m-3">
        {animalsData.map((animal, idx) => {
          let truncatedText = animal.informacion;

          if (isTruncated && animal.informacion.length > MAX_CHARACTERS) {
            truncatedText = animal.informacion.slice(0, MAX_CHARACTERS) + "...";
          }
          return (
            <Col key={idx}>
              <Card key={animal.idAnimal}>
                <Link to={`/AnimalDetails/${animal.idEspecie}`}>
                  <div className="d-flex">
                    <Card.Img
                      className="image-card"
                      variant="top"
                      src={animal.icono}
                      alt={animal.nombre}
                    />
                    <div className="flex-grow-1">
                      <Card.Body>
                        <Link to={`/AnimalDetails/${animal.idEspecie}`}>
                          <Card.Title className="firstItem">
                            {animal.nombre}
                          </Card.Title>
                        </Link>
                        <Card.Text className="information">
                          {truncatedText}
                          {isTruncated &&
                            animal.informacion.length > MAX_CHARACTERS && (
                              <span
                                className="read-more"
                                onClick={handleReadMoreClick}
                              >
                                Leer más
                              </span>
                            )}
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default AnimalList;
