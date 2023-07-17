import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { AnimalCard } from "../animalCard/AnimalCard";
import NoticiasList from "components/Noticia/NoticiasList";
import "../../index.css";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <h1
                className="Header-title"
                style={{
                  fontSize: "3rem",
                  marginBottom: "-0px",
                }}
              >
                Bienvenidos a ZOOBITAT
              </h1>
            </Col>
            <Col>
              <p id="Header-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt et voluptatibus, incidunt facere quibusdam enim?
              </p>
            </Col>
          </Row>
        </Container>

        <AnimalCard animal={undefined} />
        <h1 className="articulo-informativos">ATICULOS FORMATIVOS</h1>
        <div style={{ width: "95%", margin: "5px" }}>
          <NoticiasList />
        </div>
      </header>
    </div>
  );
}

export default Home;
