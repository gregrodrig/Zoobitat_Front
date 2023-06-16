import React from "react";
import { GrMapLocation } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { Link } from "react-router-dom";
import './ActividadesDetails.css'

function ActividadDetails() {
const Actvidad = [
{
idActividad: 2,
actividad: "Exhibiciones Interactivas",
descripcion: "Experimenta la emocien de acercarte a nuestros increibles animales mientras los alimentas.Unete a nuestros cuidadores expertos en un recorridgo interactivo y convertete en parte de su rutina diaria.Desde elefantes majestusos hasta punguinos adorables,esta experiencia unica te brindara recuerdos que duraran toda la",
ubicacion: "Área Abierta",
fecha: "25/07/2023",
tiempo:"12:00H ",
backImages:"/assets/01_Alimentacion.jpg",
imagenes: [ "/assets/Touching_Animals_02.jpg",
"/assets/Touching_Animals_03.jpg",
"/assets/touching_Animals_01.png",

]
}

];
return (
<body>
<header className='AD-header'>
{/* una map para sacar la background image */}
{Actvidad.map((acti) => (
<div className='animal-header' key={acti.id}>
<div className='header-container'>
<div className='header-image'>
<img src={acti.backImages} alt='back-img' style={{ height: '210px' }} />
</div>
</div>
</div>
))}
</header>
{/* una map para sacar el titulo , la descripcion y la image */}
<div className='animals'>
{Actvidad.map((acti) => (
<div className='actividad-details'>

<h2 className='actividad' style={{ fontWeight: 'bold' }}>{acti.actividad}</h2>
<p className='dateAndPlace'>
<GrMapLocation style={{ marginRight: '5px' , color:'#C0D904' }} />
{`${acti.ubicacion} - `}
<MdDateRange style={{ marginRight: '5px' , color : '#C0D904' }} />
{acti.fecha} {' - '} <BiTimeFive style={{ marginRight: '5px', color: '#C0D904' }} />
{acti.tiempo}
</p>
<h5>Descripción</h5>
<p style={{ textAlign: 'start', marginLeft: '20px', fontSize: '12px' ,marginTop:'10px'}}>{acti.descripcion}</p>
<h5>Galería de Imágenes</h5>
{acti.imagenes.map(image => (
<img
key={image}
style={{ width: '120px', height: '120px', borderRadius: '20px', marginRight: '8px' , marginTop:'10px' }}
src={image}
alt="actividad-img"
/>
))}

</div>
))}
</div>

</body>
)
}
export default ActividadDetails;