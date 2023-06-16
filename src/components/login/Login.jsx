import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import "./Login.module.css"
import { AiFillCheckCircle } from "react-icons/ai";

export default function Login() {
  return (
    
<>
  <div style={{ maxWidth: "320px", margin: "0 auto" }}>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{ marginTop: "100px" }}>
        <h1 style={{ marginBottom: '40px', color: '#2A411C', fontWeight: "bold", fontSize: '32px' }}>¡Bienvenido! </h1>

        <Form.Control
          style={{ backgroundColor: '#F2F4F7', height: "60px", borderRadius: '' }}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control
          style={{ backgroundColor: '#F2F4F7', height: "60px", borderRadius: ''}}
          type="password"
          placeholder="Password"
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
      >
        Iniciar Sesion
      </Button>
    </Form>
  </div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' , fontSize:'14px' }}>
      <AiFillCheckCircle style={{ fontSize: '25px', color:'#2A411C' , marginLeft:'5px'}} />
      <span style={{ marginLeft: '9px', marginRight:'80px' ,paddingRight:'-15px', color:'#4F7302' }}>Recuérdame</span>
      <span style={{ marginLeft: '5px',color:'#4F7302'}}>¿Olvidaste tu contraseña?</span>
    </div>
<div style={{ marginTop: '100px', fontSize: '14px' }}>
  ¿No tienes cuenta? ?
  <span style={{ color: '#4F7302' }}>
    <a href="/register" style={{ color: '#4F7302' ,marginLeft:'5px' }}>Regístrate Ahora</a>
  </span>
</div>

</>







  );
}

    

