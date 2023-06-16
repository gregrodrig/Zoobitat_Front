import React from "react";

import { Container, Row, Col } from "react-bootstrap";
const urlAPI = "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg";
const imgCover = "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg";

export default function AnimalList({ animal }) {
  // const animalsData = [
  //   {
  //     idAnimal: 1,
  //     imagen: "/assets/elephantAfricano.jpg",
  //     nombre: "Elefante Africano ",
  //     informacion:
  //       "El elefante africano es la especie de elefante mas grande y habita en diversas",
  //   },
  //   {
  //     idAnimal: 2,
  //     imagen: "/assets/Tiger.jpg",
  //     nombre: "Tiger",
  //     informacion:
  //       "El tigre es una especie de felino que habita en varios hábitats,inclyuendo selv.. ",
  //   },
  //   {
  //     idAnimal: 3,
  //     imagen: "/assets/Chamaleon.jpg",
  //     nombre: "Cameleon",
  //     informacion:
  //       "Los Camaleones son conocidos por sus capacidad unica de cambiar el color..",
  //   },
  // ];
  return (
    <div className="detailsContainer">
      {/* {animal.map((animal) => (
       
        <div className="animalContainer" key={animal.idAnimal}>
          <Container>
            <Row>
              <Col>
                <img
                  style={{
                    marginRight: "-5px",
                    borderRadius: "5px",
                    height: "100px",
                    width: "100px",
                    marginBottom: "7px",
                  }}
                  className="col animalImage"
                  src={!animal.imagen ? imgCover : urlAPI + animal.imagen}
                  alt={animal.titulo}
                />
              </Col>
              <Col>
                <div className="animalDetailsContainer">
                  <div className="firstItem">
                    <p>
                      <strong>{animal.nombre}</strong>
                    </p>
                  </div>
                  <div className="information">
                    <p>
                      <span>{animal.informacion}</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )
      
      )} */}
    </div>
  );
}
