import React from "react";
import Button from "react-bootstrap/Button";
import { Col, Container, Image, Row } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Mapa() {
  return (
    <>
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={100}
        defaultPositionY={200}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <Container fluid style={{ marginBottom: "20px" }}>
              <Row style={{ marginTop: "1.5rem" }}>
                <Col>
                  <Button
                    style={{ width: "100%", background: "#d98859", border: 0 }}
                    size="lg"
                    // variant="outline-success"
                    onClick={() => zoomOut()}
                  >
                    -
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button
                    style={{ width: "100%", background: "#c0d904", border: 0 }}
                    size="lg"
                    onClick={() => zoomIn()}
                  >
                    +
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={{
                      width: "100%",
                      background: "#733729",
                      border: 0,
                    }}
                    size="lg"
                    // variant="outline-danger"
                    onClick={() => resetTransform()}
                  >
                    x
                  </Button>
                </Col>
              </Row>
            </Container>
            <TransformComponent>
              <Container fluid>
                <Col xs={12} md={12} lg={12}>
                  <Row>
                    <div style={{ width: "100vw", height: "100vh" }}>
                      <Image
                        alt="Mapa del zoológico"
                        src="assets/mapa/Mapa.svg"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Row>
                </Col>
              </Container>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </>
  );
}
