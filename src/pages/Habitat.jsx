import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Habitat.css'

function Habitat() {
const habitatData = [
{
id: 1,
habitat:["Sabana Africana","Selva Tropical","Zona Polar","Desierto", "Aviario","Pantano","Bosque Templado","Acuario","Amazónica" ],
imagenes: [
"/assets/Sabana_Africana.jpg",
"/assets/Selva_Tropical.jpg",
"/assets/Polar.jpg",
"/assets/Desierto.jpg",
"/assets/Aviario.jpg",
"/assets/Pantano.jpg",
"/assets/Bosque_Templado.jpg",
"/assets/Acuario.jpg",
"/assets/Amazonica.jpg"



],
},
];

return (
<div className="main">
<header className="contacto-header">
<h1 className="contacto-title">Habitat</h1>
<p className="contacto-description">
Descubre la maravillosa diversidad de los hábitats naturales de nuestro zoológico
</p>
</header>

<Container className=''>
{habitatData[0].imagenes.map((imagen, index) => (
<img src={imagen} alt={`Imagen ${index + 1}`} className="img-fluid" />

))}

</Container>
</div>
);
}

export default Habitat;

