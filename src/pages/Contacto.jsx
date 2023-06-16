import React from 'react'
import './Contacto.css'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { GrMapLocation } from 'react-icons/gr';



function Contacto() {

const contactData = [

{
id:1,
direcion:"456 Calle H, Alcalá de Henares Madrid, España",
movil:"+34 672 97 24 98",
email:"contact@zoobitat.com"
}
]

return (

<div className='main'>
<header className='contacto-header'>
<h1 className='contacto-title'> Contacto </h1>
<p className='contacto-description'> ¡Conecta y sugiere! Ponte en contacto con nosotros y comparte tus ideas</p>
</header>
<Form>
<Form.Group className="mb-3" controlId="formGroupNombre" style={{ marginTop: "" }}>
<h1 style={{ marginBottom: '10px', color: '#2A411C', fontWeight: "bold", fontSize: '22px', textAlign: "start", marginLeft: '15px', marginTop:'10px' }}>Contáctanos</h1>

<Form.Control
style={{ backgroundColor: '#F2F4F7', height: "55px", borderRadius: '', width: "390px", margin: '16px' }}
type="text"
placeholder="Nombre " />
</Form.Group>
<Form.Group className="mb-3" controlId="formGroupEmail">
<Form.Control
style={{ backgroundColor: '#F2F4F7', height: "55px", width: "390px", margin: '16px' }}
type="email"
placeholder="Email" />
</Form.Group>

<Form.Group controlId="formMensaje">
<Form.Control
style={{ backgroundColor: '#F2F4F7', height: "100px", borderRadius: '5px', width: "390px", margin: '16px' }}
as="textarea"
placeholder="Mensaje"
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
style={{
backgroundColor: "#2A411C",
borderRadius: "30px",
width: "100%",
}}
size="lg"
>
Enviar Mensaje
</Button>
<hr style={{ margin: "30px ", borderWidth: "2px", width: "80%" , marginLeft:'36px' ,color:'black' }} />
</Form>
{contactData.map((contact) => (
<dvi className="contact-Container" key={contact.id}>
<p> <GrMapLocation style={{color:'#C0D904' }}/> {contact.direcion}</p>
<p className='mailAndMobile' >
<BsTelephoneFill style={{ marginRight: '5px' , color:'#C0D904' }} />
{`${contact.movil} - `}
<MdEmail style={{ marginRight: '5px' , color : '#C0D904' }} />
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