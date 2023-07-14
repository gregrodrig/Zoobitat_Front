import React, { useState } from 'react';
import './Contacto.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';
import Encabezado from 'components/header/Encabezado';
import axios from 'axios';
import { Empty } from 'components/emptyMsg/Empty';
import { Col, Container, Row } from 'react-bootstrap';
import log from 'loglevel';
import miVariableGlobal from '../global.js';

function Contacto() {
  const contactData = [
    {
      id: 1,
      direcion: '456 Calle H, Alcalá de Henares Madrid, España',
      movil: '+34 672 97 24 98',
      email: 'contact@zoobitat.com',
    },
  ];

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleEnviarMensaje = () => {
    const data = {
      correo: email,
      nombre: nombre,
      comentarioText: mensaje,
      estado: true,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      setEnviado(false);
      setTimeout(() => {
        setError(false);
      }, 5000); // Ocultar el mensaje después de 5 segundos
      return;
    }

    axios
      .post(`https://${miVariableGlobal}:7106/api/Comentario`, data)
      .then((response) => {
        setEnviado(true);
        setError(false);
        setMensaje('');
        setEmail('');
        setNombre('');
        setTimeout(() => {
          setEnviado(false);
        }, 5000); // O
      })
      .catch((error) => {
        setError(true);
        setEnviado(false);
        setTimeout(() => {
          setError(false);
        }, 5000); // O

        console.error(error);
      });
  };

  function sendLogToServer(logMessage) {
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: logMessage,
        level: 'INFO',
        section: 'Contacto',
      })
      .then((response) => {
        console.log('Log enviado al servidor');
      })
      .catch((error) => {
        console.error('Error al enviar el log al servidor', error);
      });
  }

  log.info('Página de contacto cargada');
  sendLogToServer('Página de contacto cargada');

  return (
    <div className='main'>
      <Encabezado
        titulo='Contacto'
        info='¡Conecta y sugiere! Ponte en contacto con nosotros y comparte tus ideas'
      />

      <Form style={{ alignContent: 'center', margin: '20px' }}>
        <Form.Group className='mb-3' controlId='formGroupNombre'>
          <h1
            style={{
              marginBottom: '10px',
              color: '#2A411C',
              fontWeight: 'bold',
              fontSize: '22px',
              textAlign: 'start',
              margin: '20px 0',
            }}
          >
            Contáctanos
          </h1>

          {enviado && <Empty msg='msgOk' />}
          {error && <Empty msg='msgNot' />}

          <Form.Control
            style={{
              backgroundColor: '#F2F4F7',
              height: '55px',
              borderRadius: '',
              width: '100%',
            }}
            type='text'
            placeholder='Nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className='mb-3'
          controlId='formGroupEmail'
          style={{ width: '100%' }}
        >
          <Form.Control
            style={{
              backgroundColor: '#F2F4F7',
              height: '55px',
              width: '100%',
            }}
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formMensaje'>
          <Form.Control
            style={{
              backgroundColor: '#F2F4F7',
              height: '100px',
              borderRadius: '5px',
              width: '100%',
            }}
            as='textarea'
            placeholder='Mensaje'
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <Form.Group
            controlId='formGroupRadio'
            style={{
              textAlign: 'initial',
            }}
          >
            <Form.Check
              style={{
                margin: '20px 0',
              }}
              type='radio'
              id='radioOption'
              label={
                <div className='radioLabel'>
                  <span>Estoy de acuerdo con la política de privacidad</span>
                </div>
              }
            />
          </Form.Group>
        </Form.Group>

        <Button
          variant='secondary'
          style={{
            backgroundColor: '#2A411C',
            borderRadius: '30px',
            width: '100%',
          }}
          size='lg'
          onClick={handleEnviarMensaje}
        >
          Enviar Mensaje
        </Button>
        <hr
          style={{
            marginTop: '60px ',
            marginBottom: '40px ',
            borderWidth: '2px',
            color: '#2A411C',
          }}
        />
      </Form>
      <Container
        fluid
        style={{ textAlign: 'left', margin: '20px', padding: 0 }}
      >
        <Row>
          <Col>
            <Row>
              {contactData.map((contact) => (
                <>
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    className='contact-Container'
                    key={contact.id}
                    style={{ marginBottom: '20px' }}
                  >
                    <span>
                      {' '}
                      <GrMapLocation
                        style={{
                          marginRight: '5px',
                          color: '#C0D904',
                          height: '23px',
                          width: '23px',
                        }}
                      />{' '}
                      {contact.direcion}
                    </span>
                  </Col>
                  <Col xs={6} md={6} lg={6}>
                    <span className='mailAndMobile'>
                      <BsTelephoneFill
                        style={{
                          marginRight: '5px',
                          color: '#C0D904',
                          height: '20px',
                          width: '20px',
                        }}
                      />
                      {contact.movil}
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <MdEmail
                        style={{
                          marginRight: '5px',
                          color: '#C0D904',
                          height: '26px',
                          width: '26px',
                        }}
                      />
                      {contact.email}
                    </span>
                  </Col>
                </>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacto;
