// import Sidebard from "components/sidebard/Sidebard";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Encabezado from "components/header/Encabezado";
import useUser from "hooks/useUser";

const Dashboard = () => {
  const { rol } = useUser();
  let msgWelcome = "";

  const gestor = 1;
  const cuidador = 2;
  const veterinario = 3;
  const visitante = 4;
  const inactivo = 5;

  if (rol === gestor) {
    msgWelcome = "Gestor";
  } else if (rol === cuidador) {
    msgWelcome = "Cuidador";
  } else if (rol === veterinario) {
    msgWelcome = "Veterinario";
  } else if (rol === visitante) {
    msgWelcome = "Visitante";
  } else if (rol === inactivo) {
    msgWelcome = "Inactivo";
  } else {
    msgWelcome = "Eliminado";
  }

  let content = [
    {
      image: "assets/Dash_icons/Animales.svg",
      imageColor: "#000",
      link: "/AnimalDash",
      name: "Animales",
      roles: [gestor, veterinario],
    },
    {
      image: "assets/Dash_icons/Habitat.svg",
      imageColor: "#4F7302",
      link: "/HabitatList",
      name: "Hábitat",
      roles: [gestor],
    },
    {
      image: "assets/Dash_icons/Tareas.svg",
      imageColor: "#C0D904",
      link: "/AsignacionList",
      name: "Tareas",
      roles: [gestor, veterinario],
    },
    {
      image: "assets/Dash_icons/Partes.svg",
      imageColor: "#969696",
      link: "/partelist",
      name: "Partes",
      roles: [gestor, cuidador, veterinario],
    },
    {
      image: "assets/Dash_icons/Actividades.svg",
      imageColor: "#07D2FF",
      link: "/ActividadesAdmin",
      name: "Actividades",
      roles: [gestor, cuidador],
    },
    {
      image: "assets/Dash_icons/Mapa.svg",
      imageColor: "#741E76",
      link: "/Mapa",
      name: "Mapa",
      roles: [gestor],
    },
    {
      image: "assets/Dash_icons/Noticias.svg",
      imageColor: "#394553",
      link: "/NoticiasAdmin",
      name: "Noticias",
      roles: [gestor],
    },
    {
      image: "assets/Dash_icons/Usuarios.svg",
      imageColor: "#2A411C",
      link: "/usuarioList",
      name: "Usuarios",
      roles: [gestor],
    },
    {
      image: "assets/Dash_icons/Alimentacion.svg",
      imageColor: "#D98859",
      link: "",
      name: "Alimentación",
      roles: [gestor, cuidador, veterinario],
    },
    {
      image: "assets/Dash_icons/Informes.svg",
      imageColor: "#733729",
      link: "",
      name: "Informes",
      roles: [gestor, cuidador, veterinario],
    },
  ];
  content = content.filter((content) => content.roles.includes(rol));
  return (
    <>
      <Encabezado
        titulo={`BIENVENIDO ${msgWelcome}`}
        info=" "
        style={{
          alignItems: "center",
        }}
      />
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
                          <img
                            src={menu.image}
                            alt={menu.name}
                            className="img"
                          />
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
    </>
  );
};

export default Dashboard;
