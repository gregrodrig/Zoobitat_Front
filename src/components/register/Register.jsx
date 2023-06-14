import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { AiFillEye } from 'react-icons/ai';


export default function Register() {
  return (
  <>
  <div style={{ maxWidth: "320px", margin: "0 auto" }}>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupNombre" style={{ marginTop: "30px" }}>
        <h1 style={{ marginBottom: '40px', color: '#2A411C', fontWeight: "bold", fontSize: '32px' }}>Crear Cuenta </h1>

        <Form.Control
          style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: '' }}
          type="text"
          placeholder="Nombre Completo"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control
          style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: ''}}
          type="email"
          placeholder="Email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupRol">
  <Form.Select
    style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: '' }}
    aria-label="Rol"
  >
    <option>Rol</option>
    <option>Visitante</option>
    <option>Cuidador</option>
    <option>Medico</option>
    <option>Gestor</option>
  </Form.Select>
</Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control
          style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: ''}}
          type="password"
          placeholder="Contraseña"
          
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
