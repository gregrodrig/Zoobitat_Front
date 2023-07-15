import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Habitat.css";
import "../index.css";
import style from "./Habitat.css";
import { Link } from "react-router-dom";
import axios from "axios";
import miVariableGlobal from '../global.js';
import log from "loglevel";


function Habitat() {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    log.info('Página HabitatsList visitada ')
    sendLogToServer('Página HabitatsList visitada ')
    fetch(`https://${miVariableGlobal}:7106/api/habitat`)
      .then((response) => response.json())
      .then((data) => setHabitats(data))
      .catch((error) => {



        if (sessionStorage.getItem('token')) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
        }
        axios
        .post(`https://${miVariableGlobal}:7106/api/logs`, {
          message: error,
          level: 'ERROR',
          section: 'Habitat',
          IdUsuario: 4,
          Usuario: null
        })
        .then((response) => {
          console.log('Log enviado al servidor')
        })
        .catch((error) => {
          console.error('Error al enviar el log al servidor', error)
        })
      }

      
      
      
      
      );
  }, []);


  function  sendLogToServer(logMessage) {
    
    const token = sessionStorage.getItem('token');
    var headr=null;
   
    const config = {
      message: logMessage,
      level: 'INFO',
      section: 'Hbitatlstvisitante',
      IdUsuario: 4,
      Usuario: null,
    };
  
    // Verificar si el token existe en la sesión y agregarlo a la configuración
    if (sessionStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    }
  
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, config)
      .then((response) => {
        console.log('Log enviado al servidor');
      })
      .catch((error) => {
        console.error('Error al enviar el log al servidor', error);
      });
  }

  return (
    <div className="main">
      <header className="contacto-header">
        <h1 className="contacto-title">Habitat</h1>
        <p className="contacto-description">
          Descubre la maravillosa diversidad de los hábitats naturales de nuestro zoológico
        </p>
      </header>

      <Container fluid style={{ margin: "0px", marginTop: "20px" }} className={style.Container}>
        <Row className="justify-content-center">
          {habitats.map((habitat) => (
            <Col className="mb-4 item" key={habitat.nombre}>
              <img
                className="img-fluid"
                src={habitat.imagen}
                alt={habitat.nombre}
                style={{
                  width: "-webkit-fill-available",
                  height: "auto",
                  margin: "0px",
                }}
              />

              <Link to={`/habitat/${habitat.idHabitat}`}>
                <h2
                  style={{
                    color: "var(--MediumGreen)",
                    margin: "0px",
                    marginBottom: "20px",
                    paddingTop: "0px",
                    textAlign: "center",
                  }}
                >
                  {habitat.nombre}
                </h2>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Habitat;
