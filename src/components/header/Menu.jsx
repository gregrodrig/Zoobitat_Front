import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch } from "react-icons/bs";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { IoTime } from "react-icons/io5";
import { MdPets } from "react-icons/md";
import { GiTreeBranch } from "react-icons/gi";
import { TbMapSearch } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { useState } from "react";
function Menu() {

  
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`mb-3 ${style.customNavbar}`}
        >
          <Container fluid>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="menuToggle"
            />
            <Navbar.Brand href="#">
              <Link to="/">
                <img src="assets/Logo.png" alt="Logo" />
              </Link>
            </Navbar.Brand>
            <BsSearch className={style.searchIcon} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header
                closeButton
                style={{ backgroundColor: "#4F7302" }}
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
                  <Nav.Link href="/">
                    <AiFillHome
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />
                    Home
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">
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
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">
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
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">
                    <IoTime
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />{" "}
                    Horarios
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">
                    <MdPets
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "7px",
                      }}
                    />{" "}
                    Animales
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">
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
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">
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
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">
                    <MdContactPhone
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginRight: "10px",
                        marginBottom: "6px",
                      }}
                    />{" "}
                    Contactos
                  </Nav.Link>
                </Nav>
                <Nav className="d-grid gap-2">
                  <Nav.Link href="/register">
                  <Button
                    variant="primary"
                    style={{ backgroundColor: "#4F7302", borderRadius: "30px", width:"320px",
                    marginLeft:"30px" }}
                    size="lg"
                  >
                    Registrarse
                  </Button>
                  </Nav.Link>
                  <Nav.Link href="/login">
                    <Button
                      variant="secondary"
                      style={{
                        backgroundColor: "#2A411C",
                        borderRadius: "30px",
                        width:"320px",
                        marginLeft:"30px"
                      }}
                      size="lg"
                    >
                      Iniciar Sesion
                    </Button>
                  </Nav.Link>
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
