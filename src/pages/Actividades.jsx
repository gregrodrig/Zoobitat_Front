import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { GrMapLocation } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Actividades.css'

function Actividades() {
const actividadesData = [
{
idActividad: 1,
imagen: "/assets/Alimentacion_03.png",
actividad: "Alimentación de Animales ",
descripcion: "Experimenta la emoción de acercarte a nuestros increíbles animales mientras los alimentas.",
ubicacion: "La Granja",
fecha: "22/06/2023"
},
{
idActividad: 2,
imagen: "/assets/Exhibicion_02.png",
actividad: "Exhibiciones Interactivas",
descripcion: "Toca y aprende sobre nuestras fascinantes criaturas! Descubre sus adaptaciones únicas..",
ubicacion: "Área Abierta",
fecha: "25/07/2023"
},
{
idActividad: 3,
imagen: "/assets/Aguila_02.png",
actividad: "Vuelo de Águilas ",
descripcion: "Sumérgete en el fascinante mundo de las águilas en nuestra espectacular exhibición de vuelo.",
ubicacion: "La CUEVAS",
fecha: "08/07/2023"
},
];

return (

<div className='main'>
<header className='actividad-header'>
<h1 className='actividad-title' > Actividades </h1>
<p className='actividad-description'> Explora el fascinante mundo de la vida silvestre disfrutando de nuestras actividades.</p>
</header>

<div className="detailsContainer">
{actividadesData.map((act) => (
<div className="actividadContainer" key={act.idActividad}>
<Container>
<Link to= '/actividadDetails' className='link'>

<Row>
<Col>
<img
style={{ marginRight: '-5px', borderRadius: '6px', height: '100px', width: '100px', marginBottom: '7px' }}
className="actividadImage"
src={act.imagen}
alt={act.actividad}
/>
</Col>
<Col>
<div className="actividadDetailsContainer">
<div className="firstItem">
<p>
<strong>{act.actividad}</strong>
</p>
</div>
<div className="information">
<p>
<span>{act.descripcion}</span>
</p>
<div>
<p className='dateAndplace' >
<GrMapLocation style={{ marginRight: '5px' , color:'#C0D904' }} />
{`${act.ubicacion} - `}
<MdDateRange style={{ marginRight: '5px' , color : '#C0D904' }} />
{act.fecha}
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
)
}



export default Actividades