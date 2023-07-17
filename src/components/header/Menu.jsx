import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./Menu.module.css";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { IoTime } from "react-icons/io5";
import { MdPets } from "react-icons/md";
import { GiTreeBranch } from "react-icons/gi";
import { TbMapSearch } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import useUser from "../../hooks/useUser";
import axiosInstance from "utils/api/CallApi";
import { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
const roles = {
  Admin: 1,
  Cuidador: 2,
  Veterinario: 3,
  Visitante: 4,
  Inactivo: 5,
};

function Menu() {
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
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`p-0 ${style.customNavbar} navbar-mobile `}
        >
          <Container fluid className={`${style.mainContainer}`}>
            <Row>
              <Col xs={4}>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  className={`menuToggle ${style.customMenuToggle}`}
                />
              </Col>
              <Col xs={8}>
                <Navbar.Brand href="#">
                  <Link to="/">
                    <img src="assets/Logo.png" alt="Logo" />
                  </Link>
                </Navbar.Brand>
              </Col>
            </Row>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header
                style={{ backgroundColor: "#4F7302" }}
                closeButton
              >
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{ color: "white" }}
                >
                  MENÚ
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 pb-4">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                    }}
                  >
                    <AiFillHome
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                        textDecoration: "none",
                      }}
                    />
                    Home
                  </Link>
                  <hr />
                  {/* USER ROLES */}
                  {roles.Admin === rol ||
                  roles.Cuidador === rol ||
                  roles.Veterinario === rol ? (
                    <>
                      <Link
                        to="/Dashboard"
                        style={{
                          textDecoration: "none",
                          color: "gray",
                        }}
                      >
                        <AiFillHome
                          style={{
                            color: "gray",
                            fontSize: "20px",
                            marginRight: "10px",
                            marginBottom: "7px",
                          }}
                        />
                        Dashboard
                      </Link>
                      <hr />
                    </>
                  ) : null}
                  {/* END USER ROLES */}
                  <Link
                    to="#action2"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                    }}
                  >
                    {" "}
                    <BsFillPeopleFill
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />{" "}
                    Nosotros
                  </Link>
                  <hr />
                  <Link
                    to="/Actividades"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                    }}
                  >
                    {" "}
                    <FiActivity
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />{" "}
                    Actividades
                  </Link>
                  <hr />
                  <Link
                    to="#action2"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                    }}
                  >
                    <IoTime
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />{" "}
                    Horarios
                  </Link>
                  <hr />
                  <Link
                    to="/AnimalList"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                    }}
                  >
                    <MdPets
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />{" "}
                    Animales
                  </Link>
                  <hr />
                  <Link
                    to="/habitat"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                    }}
                  >
                    {" "}
                    <GiTreeBranch
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />{" "}
                    Habitat
                  </Link>
                  <hr />
                  <Link
                    to="/mapa"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                    }}
                  >
                    {" "}
                    <TbMapSearch
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />{" "}
                    Mapa
                  </Link>
                  <hr />
                  <Link
                    to="Contacto"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                    }}
                  >
                    <MdContactPhone
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "6px",
                      }}
                    />{" "}
                    Contactos
                  </Link>
                </Nav>
                <Nav className="d-grid gap-2">
                  {isLogged ? (
                    <Link to="/login">
                      <Button
                        onClick={logout}
                        variant="secondary"
                        style={{
                          backgroundColor: "#2A411C",
                          borderRadius: "30px",
                          width: "320px",
                          marginLeft: "30px",
                        }}
                        size="lg"
                      >
                        Cerrar Sesión
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/register">
                        <Button
                          variant="primary"
                          style={{
                            backgroundColor: "#4F7302",
                            borderRadius: "30px",
                            width: "320px",
                            marginLeft: "30px",
                          }}
                          size="lg"
                        >
                          Registrarse
                        </Button>
                      </Link>
                      <Link to="/login">
                        <Button
                          variant="secondary"
                          style={{
                            backgroundColor: "#2A411C",
                            borderRadius: "30px",
                            width: "320px",
                            marginLeft: "30px",
                          }}
                          size="lg"
                        >
                          Iniciar Sesión
                        </Button>
                      </Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menu;
