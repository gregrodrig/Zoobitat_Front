import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../../index.css";
import { Link } from "react-router-dom";

export default class NoticiaCard extends Component {
  render() {
    const { imagen, titulo, texto, id } = this.props;

    return (
      <Col xs={12} md={6} lg={4}>
        <Card className="mb-2" style={{ borderColor: "var(--LightGreen)" }}>
          <Card.Body>
            <Row>
              <Col xs={4}>
                <Link to={`/Noticia/${id}`}>
                  <Card.Img
                    src={imagen}
                    alt="Imagen de la noticia"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              </Col>
              <Col xs={8}>
                <Link to={`/Noticia/${id}`}>
                  <Card.Title
                    style={{
                      color: "var(--MediumGreen)",
                      textAlign: "start",
                    }}
                  >
                    {titulo}
                  </Card.Title>
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
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
