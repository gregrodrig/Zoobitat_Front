import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Sidebard() {
  return (
    <Row>
      <Col md={2} className="sidebar">
        {/* Aquí va el contenido del sidebar */}
        <h4>Sidebar</h4>
        <ul>
          <li>Enlace 1</li>
          <li>Enlace 2</li>
          <li>Enlace 3</li>
        </ul>
      </Col>
    </Row>
  );
}
