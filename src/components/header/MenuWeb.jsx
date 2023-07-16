import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import "./navbar.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { IoLogOutOutline, IoTime } from "react-icons/io5";
import { MdPets } from "react-icons/md";
import { GiTreeBranch } from "react-icons/gi";
import { TbMapSearch } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import useUser from "../../hooks/useUser";
import axiosInstance from "utils/api/CallApi";
import { useCallback, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";

const roles = {
  Admin: 1,
  Cuidador: 2,
  Veterinario: 3,
  Visitante: 4,
  Inactivo: 5,
};

const menu = [
  {
    icon: <BsFillPeopleFill />,
    link: "#action2",
    name: "Nosotros",
  },
  {
    icon: <FiActivity />,
    link: "/Actividades",
    name: "Actividades",
  },
  {
    icon: <IoTime />,
    link: "#action2",
    name: "Horarios",
  },
  {
    icon: <MdPets />,
    link: "/AnimalList",
    name: "Animales",
  },
  {
    icon: <GiTreeBranch />,
    link: "/habitat",
    name: "Habitat",
  },
  {
    icon: <TbMapSearch />,
    link: "/mapa",
    name: "Mapa",
  },
  {
    icon: <MdContactPhone />,
    link: "/Contacto",
    name: "Contactos",
  },
];

function MenuWeb() {
  const { isLogged, logout, rol, setRol } = useUser();

  const getRol = useCallback(async () => {
    console.log(isLogged);
    if (!isLogged) {
      return;
    }
    try {
      const response = await axiosInstance.get(`LogIn/rol-token`);
      setRol(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [isLogged, setRol]);

  useEffect(() => {
    getRol();
  }, [getRol]);

  return (
    <>
      <Navbar className={`mb-3 ${style.customNavbar} navbar-laptop`}>
        <Container fluid>
          <Row className="justify-content-between">
            <Col md="auto" lg={2}>
              <Link to="/">
                <Image
                  alt="Logo"
                  src="assets/Logo.png"
                  style={{ padding: "12px" }}
                />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md="auto" lg={8}>
              <Nav className="m-2" activeKey="/home">
                {menu.map((menu, index) => {
                  return (
                    <Nav.Item key={index}>
                      <Link
                        to={menu.link}
                        style={{
                          color: "white",
                        }}
                      >
                        <small
                          style={{
                            fontSize: "20px",
                          }}
                        >
                          {menu.icon}
                        </small>{" "}
                        <small className="p-3">{menu.name}</small>
                      </Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav>
                {isLogged ? (
                  <Link to="/login" onClick={logout}>
                    <IoLogOutOutline
                      style={{
                        fontSize: "40px",
                        color: "white",
                        // color: "#4F7302",
                      }}
                    />
                  </Link>
                ) : (
                  <>
                    <Link to="/register">
                      <Button
                        variant="secundary"
                        style={{
                          backgroundColor: "#4F7302",
                          borderRadius: "30px",
                          color: "white",
                          padding: "4px 16px",
                        }}
                        size="sm"
                      >
                        Registrarse
                      </Button>
                    </Link>
                    <Link to="/login">
                      <Button
                        variant="sm"
                        style={{
                          backgroundColor: "#2A411C",
                          borderRadius: "30px",
                          color: "white",
                        }}
                        size="sm"
                      >
                        Iniciar Sesión
                      </Button>
                    </Link>
                  </>
                )}
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default MenuWeb;
