import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import "./Login.module.css"
import { AiFillCheckCircle } from "react-icons/ai";

export default function Login() {
  return (
    
    <><Form>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{ marginTop: "100px" }}>
        <h1 style={{ marginBottom: '40px', color: '#2A411C', fontWeight: "bold", fontSize: '32px' }}>¡Bienvenido! </h1>

        <Form.Control
          style={{ backgroundColor: '#F2F4F7', width: "320px", height: "60px", marginLeft: '30px', borderRadius: '5px' }}
          type="email"
          placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control
          style={{ backgroundColor: '#F2F4F7', width: "320px", height: "60px", marginLeft: '30px', borderRadius: '5px' }}
          type="password"
          placeholder="Password" />
      </Form.Group>
      <Button
        variant="secondary"
        style={{
          backgroundColor: "#2A411C",
          borderRadius: "30px",
          width: "320px",
          marginLeft: "2px"
        }}
        size="lg"
      >
        Iniciar Sesion
      </Button>

    </Form>
    
    <AiFillCheckCircle style={{  fontSize:'25px' }}  /> recuerda  </>

  );
}

    

