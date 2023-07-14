import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch } from "react-icons/bs";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import './navbar.css'
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
import { useMediaQuery } from "react-responsive";
const roles = {
  Admin: 1,
  Cuidador: 2,
  Veterinario: 3,
  Visitante: 4,
  Inactivo: 5,
};

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
        <Navbar
          className={`mb-3 ${style.customNavbar} navbar-laptop `}
        >
          <Container style={{ marginBottom:"-26px", marginLeft:"3px"}}>
            <Navbar.Brand href="#">
              <img style={{ marginTop:'-15px'}}
                alt="Logo"
                src="assets/Logo.png"
                width="60"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3 pb-4">
              <Nav.Link href="/" style={{ color: 'gray' }}>
                <AiFillHome
                  style={{
                    color: 'gray',
                    fontSize: '15px',
                    marginRight: '10px',
                    marginBottom: '7px',
                    textDecoration: 'none',
                  }}
                />
                Home
              </Nav.Link>
              <hr />
              {/* USER ROLES */}
              {roles.Admin === rol ||
              roles.Cuidador === rol ||
              roles.Veterinario === rol ? (
                <>
                  <Nav.Link href="/Dashboard" style={{ color: 'gray' }}>
                    <AiFillHome
                      style={{
                        color: 'gray',
                        fontSize: '15px',
                        marginRight: '10px',
                        marginBottom: '7px',
                        textDecoration: 'none',
                      }}
                    />
                    Dashboard
                  </Nav.Link>
                  <hr />
                </>
              ) : null}
              {/* END USER ROLES */}
              <Nav.Link href="#action2" style={{ color: 'gray' }}>
                <BsFillPeopleFill
                 style={{
                    color: 'gray',
                    fontSize: '15px',
                    marginRight: '10px',
                    marginBottom: '7px',
                    textDecoration: 'none',
                  }}
                />{' '}
                Nosotros
              </Nav.Link>
              <hr />
              <Nav.Link href="/Actividades" style={{ color: 'gray' }}>
                <FiActivity
                   style={{
                    color: 'gray',
                    fontSize: '15px',
                    marginRight: '10px',
                    marginBottom: '7px',
                    textDecoration: 'none',
                  }}
                />{' '}
                Actividades
              </Nav.Link>
              <hr />
              <Nav.Link href="#action2" style={{ color: 'gray' }}>
                <IoTime
                   style={{
                    color: 'gray',
                    fontSize: '15px',
                    marginRight: '10px',
                    marginBottom: '7px',
                    textDecoration: 'none',
                  }}
                />{' '}
                Horarios
              </Nav.Link>
              <hr />
              <Nav.Link href="/AnimalList" style={{ color: 'gray' }}>
                <MdPets
                   style={{
                    color: 'gray',
                    fontSize: '15px',
                    marginRight: '10px',
                    marginBottom: '7px',
                    textDecoration: 'none',
                  }}
                />{' '}
                Animales
              </Nav.Link>
              <hr />
              <Nav.Link href="/habitat" style={{ color: 'gray' }}>
                <GiTreeBranch
                    style={{
                        color: 'gray',
                        fontSize: '15px',
                        marginRight: '10px',
                        marginBottom: '7px',
                        textDecoration: 'none',
                      }}
                />{' '}
                Habitat
              </Nav.Link>
              <hr />
              <Nav.Link href="/mapa" style={{ color: 'gray' }}>
                <TbMapSearch
                   style={{
                    color: 'gray',
                    fontSize: '15px',
                    marginRight: '10px',
                    marginBottom: '7px',
                    textDecoration: 'none',
                  }}
                />{' '}
                Mapa
              </Nav.Link>
              <hr />
              <Nav.Link href="Contacto" style={{ color: 'gray' }}>
                <MdContactPhone
                  style={{
                    color: 'gray',
                    fontSize: '15px',
                    marginRight: '10px',
                    marginBottom: '7px',
                    textDecoration: 'none',
                  }}
                />{' '}
                Contactos
              </Nav.Link>
            </Nav>
            <Nav className="d-grid gap-2">
              {isLogged ? (
                <Nav.Link href="/login">
                  <Button
                    onClick={logout}
                    variant="secondary"
                    style={{
                      backgroundColor: '#2A411C',
                      borderRadius: '30px',
                      width: '320px',
                      marginLeft: '30px',
                    }}
                    size="lg"
                  >
                    Cerrar Sesión
                  </Button>
                </Nav.Link>
              ) : (
                <>
                   <div style={{ display: 'flex' , marginLeft:'90px',marginRight:'-140px' , marginBottom:'25px' }}>
              <Nav.Link href="/register">
                <Button
                  variant="success"
                  style={{
                    borderRadius: '30px',
                    width: '180px',
                  }}
                  size="md"
                >
                  Registrarse
                </Button>
              </Nav.Link>
              <Nav.Link href="/login">
                <Button
                  variant="success"
                  style={{
                    borderRadius: '30px',
                    width: '180px',
                  }}
                  size="md"
                >
                  Iniciar Sesión
                </Button>
              </Nav.Link>
            </div>
                 
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      );
 
}

export default MenuWeb;
