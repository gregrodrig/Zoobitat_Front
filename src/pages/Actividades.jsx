
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { GrMapLocation } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import log from 'loglevel';
import axios from 'axios';
import './Actividades.css';
import miVariableGlobal from '../global.js';


function formatDate(dateTimeString) {
  const dateObject = new Date(dateTimeString);
  const formattedDate = dateObject.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'

  });

  return formattedDate;
}

function Actividades() {
  const [actividades, setActividades] = useState(null);

  useEffect(() => {

    log.info('Página lista de Actividades  visitada');
    sendLogToServer('Página Actividades visitada');
    
    fetch(`https://${miVariableGlobal}:7106/api/Actividades/actividades/semana-actual`)

      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActividades(data);
      })
      .catch((error) => {
        if (sessionStorage.getItem('token')) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
        }

  axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: error,
        level: 'ERROR',
        section: 'Actividades',
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


  function sendLogToServer(logMessage) {
    if (sessionStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    }
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: logMessage,
        level: 'INFO',
        section: 'Actividades',
        IdUsuario: 4,
          Usuario: null
      })
      .then((response) => {
        console.log('Log enviado al servidor');
      })
      .catch((error) => {
        console.error('Error al enviar el log al servidor', error);
      });
  }

  if (!actividades) {
    return <div>No hay actividades</div>;
  }

  return (
    <div className='main'>
      <header className='actividad-header'>
        <h1 className='actividad-title'>Actividades</h1>
        <p className='actividad-description'>
          Explora el fascinante mundo de la vida silvestre disfrutando de nuestras actividades.
        </p>
      </header>

      <div className='detailsContainer'>
        {actividades.map((act) => (
          <div className='actividadContainer' key={act.id}>
            <Container>
              <Link to='' className='link'>

                <Row>
                  <Col>
                    <img
                      style={{

                        marginRight: '-5px',
                        borderRadius: '6px',
                        height: '100px',
                        width: '100px',
                        marginBottom: '7px'
                      }}
                      className='actividadImage'

                      src={act.foto}
                      alt={act.titulo}
                    />
                  </Col>
                  <Col>

                    <div className="actividadDetailsContainer">
                      <div className="firstItem">

                        <p>
                          <strong>{act.titulo}</strong>
                        </p>
                      </div>

                      <div className="information">

                        <p>
                          <span>{act.descripcion}</span>
                        </p>
                        <div>

                          <p className='dateAndplace'>
                            <GrMapLocation style={{ marginRight: '5px', color: '#C0D904' }} />
                            {`${act.ubicacion.nombre} - `}
                            <MdDateRange style={{ marginRight: '5px', color: '#C0D904' }} />

                            {formatDate(act.fecha)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actividades;
