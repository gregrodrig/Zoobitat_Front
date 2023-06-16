import React from "react";
import { GrMapLocation } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { Link } from "react-router-dom";
import './HabitatDetails.css'

function HabitatDetails() {
const HabitatData = [
{
idHabitat: 1,
titulo: "SABANA AFRICANA",
descripcion: `La sabana africana es un vasto paisaje de hierba alta intercalada con arbustos dispersos y algunos árboles. Este hábitat se caracteriza por sus extensas llanuras abiertas y su clima cálido.

En la sabana africana, los animales como leones, cebras, jirafas, elefantes y antílopes conviven en un delicado equilibrio.

Es común ver a los leones acechando en la hierba alta, las cebras pastando en grupos y las jirafas alcanzando las hojas de los árboles altos.`,

backImages:"/assets/Elefante_Header_Image.png",

}

];
return (
<body>
<header className='AD-header'>
{/* una map para sacar la background image */}
{HabitatData.map((habitat) => (
<div className='animal-header' key={habitat.id}>
<div className='header-container'>
<div className='header-image'>
<img src={habitat.backImages} alt='back-img' style={{ height: '210px' }} />
</div>
</div>
</div>
))}
</header>
{/* una map para sacar el titulo , la descripcion y la image */}
<div className='habitats'>
{HabitatData.map((habitat) => (
<div className='habitat-details'>

<h2 className='habitat' style={{ fontWeight: 'bold' }}>{habitat.titulo}</h2>
<hr style={{ margin: "10px ", borderWidth: "2px", width: "80%" , marginLeft:'36px' ,color:'black' }} />

<p style={{ textAlign: 'start', marginLeft: '20px', fontSize: '12px' , width:'100%', marginTop:'20px' }}>{habitat.descripcion}</p>

</div>
))}
</div>

</body>
)
}
export default HabitatDetails;