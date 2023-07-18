import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../../index.css";
import { Link } from "react-router-dom";

export default class NoticiaCard extends Component {
  render() {
    const { imagen, titulo, texto, id } = this.props;

    return (
      <Card className="mb-2" style={{ borderColor: "var(--LightGreen)" }}>
        <Card.Body>
          <Row>
            <Col xs={4}>
              <Card.Img
                src={imagen}
                alt="Imagen de la noticia"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col xs={8}>
              <Link to={`/Noticia/${id}`}>
                <Card.Title
                  style={{ color: "var(--MediumGreen)", textAlign: "start" }}
                >
                  {titulo}
                </Card.Title>
              </Link>
              <Card.Text
                style={{
                  color: "var(--Black)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                  margin: 0,
                }}
              >
                {texto}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
