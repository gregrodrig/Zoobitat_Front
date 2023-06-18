// import Sidebard from "components/sidebard/Sidebard";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  let content = [
    {
      image: "assets/Dash_icons/Animales.svg",
      imageColor: "#000",
      link: "/",
      name: "Animales",
      roles: [],
    },
    {
      image: "assets/Dash_icons/Habitat.svg",
      imageColor: "#14223B",
      link: "/",
      name: "Hábitat",
      roles: [],
    },
    {
      image: "assets/Dash_icons/Tareas.svg",
      imageColor: "#C0D904",
      link: "/",
      name: "Tareas",
      roles: [],
    },
    {
      image: "assets/Dash_icons/Partes.svg",
      imageColor: "#969696",
      link: "/",
      name: "Partes",
      roles: [],
    },
    {
      image: "assets/Dash_icons/Alimentacion.svg",
      imageColor: "#D98859",
      link: "",
      name: "Alimentación",
      roles: [],
    },
    {
      image: "assets/Dash_icons/Informes.svg",
      imageColor: "#733729",
      link: "",
      name: "Informes",
      roles: [],
    },
  ];
  // content = content.filter((content) => content.roles.includes(rol));
  return (
    <Container fluid style={{ marginBottom: "20px" }}>
      {/* <Sidebard /> */}
      <Row>
        <Col className="main-content">
          <Row>
            {content.map((menu, index) => {
              return (
                <Col xs={6} md={6} lg={6} key={index}>
                  <Card
                    style={{
                      borderRadius: "24px",
                      boxShadow: "0px 4px 8px rgba(164, 164, 164, 0.1)",
                      border: "0",
                      marginTop: "35px",
                      padding: "16px",
                    }}
                  >
                    <Link to={menu.link} className="link">
                      <Card.Header
                        style={{
                          background: "#fff",
                          margin: "35px",
                          marginLeft: "0",
                          marginRight: "0",
                          border: "0px",
                        }}
                      >
                        <img src={menu.image} alt={menu.name} className="img" />
                        <h2
                          style={{ margin: "0", color: `${menu.imageColor}` }}
                        >
                          {menu.name}
                        </h2>
                      </Card.Header>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
