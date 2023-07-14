import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { AiFillEye } from 'react-icons/ai';
import axios from "axios";
import miVariableGlobal from '../../global.js';


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 

  const handleRegistration = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setErrorMessage("Error: No se pudo crear el usuario. Verifique la información proporcionada.");
          setSuccessMessage("");
            setTimeout(() => {
              setErrorMessage("");
            }, 5000); // Ocultar el mensaje después de 5 segundos
            return;
        }
    const userData = {
      email: email,
      contrasenna: password,
      nombre: name,
      apellido: name,
      idRol: 5,
      rol:null,
      asignaciones:[]
    };


    axios.post(`https://${miVariableGlobal}:7106/api/Usuario`, userData)
      .then(response => {
        // Manejar la respuesta de la solicitud
        console.log(response.data);
        setName("");
        setPassword("");
        setEmail("");
        setSuccessMessage("Se registró exitosamente. Espere a ser confirmado por un administrador.");
        setErrorMessage("");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch(error => {
        // Manejar el error de la solicitud
        console.error(error);
        setSuccessMessage("");
        setErrorMessage("Error: No se pudo crear el usuario. Verifique la información proporcionada.");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      });
  };
  return (
  <>
   {successMessage && (
          <div style={{ backgroundColor: "green", height: "auto" }}>
            <p>{successMessage}</p>
          </div>
        )}
    {errorMessage && (
      <div style={{ backgroundColor: "red", height: "auto" }}>
        <p>{errorMessage}</p>
      </div>
    )}
  <div style={{ maxWidth: "320px", margin: "0 auto" }}>
   
    <Form>
      <Form.Group className="mb-3" controlId="formGroupNombre" style={{ marginTop: "30px" }}>
        <h1 style={{ marginBottom: '40px', color: '#2A411C', fontWeight: "bold", fontSize: '32px' }}>Crear Cuenta </h1>

       

        <Form.Control
          style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: '' }}
          type="text"
          placeholder="Nombre Completo"
          value={name} onChange={e => setName(e.target.value)}
          
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control
          style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: ''}}
          type="email"
          placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupRol">
  
</Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control
          style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: ''}}
          type="password"
          placeholder="Contraseña"

          value={password} onChange={e => setPassword(e.target.value)}
          
        />
         <AiFillEye
           style={{
            position: 'absolute',
            top: '67%',
            transform: 'translateY(-50%)',
            right: '50px',
            fontSize: '30px',
            cursor: 'pointer',
          }}
          />
        
      </Form.Group>
      
      <Button
        variant="secondary"
        style={{
          backgroundColor: "#2A411C",
          borderRadius: "30px",
          width: "100%"
        }}
        size="lg"
        onClick={handleRegistration}
      >
        Registrarme
      </Button>
      <p style={{fontSize:'10px' , textAlign:'center' , color:'#BCBCBC'}}> Al hacer clic en Registrarme, acepto los Términos y condiciones y la Politica de privacidad</p>
    </Form>
  </div>
  <div style={{ marginTop: '46px', fontSize: '15px' }}>
  ¿Ya tienes cuenta? ?
  <span style={{ color: '#4F7302' }}>
    <a href="/login" style={{ color: '#4F7302' ,marginLeft:'5px' }}>Inicia Sesión</a>
  </span>
</div>

</>
)
}
