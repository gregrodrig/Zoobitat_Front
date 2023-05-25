import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch } from "react-icons/bs";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#">
              <Link to="/">ZooBitat</Link>
            </Navbar.Brand>
            <BsSearch className={style.searchIcon} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 pb-4">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Nosotros</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Actividades</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Nosotros</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Animales</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Habitat</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Mapa</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Contactos</Nav.Link>
                </Nav>
                <Nav className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Registrarse
                  </Button>
                  <Button variant="secondary" size="lg">
                    Iniciar Sesion
                  </Button>
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
