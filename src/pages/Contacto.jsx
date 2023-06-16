import React, { useState } from 'react'
import './Contacto.css'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { GrMapLocation } from 'react-icons/gr';
import Encabezado from 'components/header/Encabezado';
import axios from 'axios';




function Contacto() {

    const contactData = [

        {
            id: 1,
            direcion: "456 Calle H, Alcalá de Henares Madrid, España",
            movil: "+34 672 97 24 98",
            email: "contact@zoobitat.com"
        }
    ]

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
            estado: true
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

        axios.post('https://localhost:7106/api/Comentario', data)
            .then(response => {
                setEnviado(true);
                setError(false);
                setMensaje("");
                setEmail("");
                setNombre("");
                setTimeout(() => {
                    setEnviado(false);
                }, 5000); // O

            })
            .catch(error => {
                setError(true);
                setEnviado(false);
                setTimeout(() => {
                    setError(false);
                }, 5000); // O

                console.error(error);
            });
    };
    return (

        <div className='main' >
            <Encabezado titulo="Contacto" info="¡Conecta y sugiere! Ponte en contacto con nosotros y comparte tus ideas" />




            {enviado && <div style={{ backgroundColor: "green", height: "30px" }}>¡Mensaje enviado con éxito!</div>}
            {error && <div style={{ backgroundColor: "red", height: "30px" }}>Ocurrió un error al enviar el mensaje. Inténtalo nuevamente más tarde.</div>}

            <Form style={{ alignContent: "center", margin: 5 }}>
                <Form.Group className="mb-3" controlId="formGroupNombre" >
                    <h1 style={{ marginBottom: '10px', color: '#2A411C', fontWeight: "bold", fontSize: '22px', textAlign: "start", marginLeft: '15px', marginTop: '10px' }}>Contáctanos</h1>

                    <Form.Control
                        style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: '', width: "100%" }}
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail" style={{ width: "100%", }}>
                    <Form.Control
                        style={{ backgroundColor: '#F2F4F7', height: "55px", width: "100%" }}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formMensaje">
                    <Form.Control
                        style={{ backgroundColor: '#F2F4F7', height: "100px", borderRadius: '5px', width: "100%" }}
                        as="textarea"
                        placeholder="Mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                    <Form.Group controlId="formGroupRadio">
                        <Form.Check
                            type="radio"
                            id="radioOption"
                            label={
                                <div className="radioLabel">
                                    <span>Estoy de acuedro con la politica de privicidad</span>
                                </div>
                            }
                        />
                    </Form.Group>

                </Form.Group>

                <Button

                    variant="secondary"
                    style={{ backgroundColor: "#2A411C", borderRadius: "30px", width: "100%" }}
                    size="lg"
                    onClick={handleEnviarMensaje}
                >
                    Enviar Mensaje
                </Button>
                <hr style={{ margin: "30px ", borderWidth: "2px", width: "80%", marginLeft: '36px', color: 'black' }} />
            </Form>





            {contactData.map((contact) => (
                <dvi className="contact-Container" key={contact.id}>
                    <p> <GrMapLocation style={{ color: '#C0D904' }} /> {contact.direcion}</p>
                    <p className='mailAndMobile' >
                        <BsTelephoneFill style={{ marginRight: '5px', color: '#C0D904' }} />
                        {`${contact.movil} - `}
                        <MdEmail style={{ marginRight: '5px', color: '#C0D904' }} />
                        {contact.email}
                    </p>

                </dvi>
            )
            )
            }
        </div>
    )
}



export default Contacto;