import React from 'react'

import './AnimalDetails.css'
import { Container } from 'react-bootstrap'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';




function AnimalDetails() {
    const Elephant = [ 
        {
            id:1,
            name: "Elefante Africano",
            especie:'Loxodonta Africana',
            placeOfBirth:'Saban',
            description:"La especie de elefante más grande es el elefante africano, que vive en varios lugares de África, como sabanas, bosques y zonas de matorrales. Considerados como especies clave para el ecosistema en el que viven, son conocidos por sus grandes colmillos y su estructura social compleja.",
            backImages: "/assets/Elephant.jpg",
            images: [ "/assets/Elephant_03.png",
            "/assets/Elephant_01.png",
            "/assets/Elephant_03.png",

            ]
        }

    ];
  return (
<body>
  <header className='AD-header'>
    {/* una map para sacar la background image */}
    {Elephant.map((animal) => (
  <div className='animal-header' key={animal.id}>
    <div className='header-container'>
      <div className='header-image'>
        <img src={animal.backImages} alt='back-image' style={{ height: '210px' }} />
      </div>
    </div>
  </div>
))}
  </header>
      {/* una map para sacar el titulo , la descripcion y la image */}
 <div className='animals'>
  {Elephant.map((animal) => (
    <div className='animal-details'>
      <h2 className='animal' style={{ fontWeight: 'bold' }}>{animal.name}</h2>
      <p className='especie'>
  <DiCssdeck style={{ marginRight: '5px' , color:'#C0D904' }} />
  {`${animal.especie} - `}
  <FaMapMarkerAlt style={{ marginRight: '5px' , color : '#C0D904' }} />
  {animal.placeOfBirth}
</p>      <h5>Descripción</h5>
      <p style={{ textAlign: 'start', marginLeft: '20px', fontSize: '12px' ,marginTop:'10px'}}>{animal.description}</p>
      <h5>Galería de Imágenes</h5>
      {animal.images.map(image => (
        <img
          key={image}
          style={{ width: '120px', height: '120px', borderRadius: '20px', marginRight: '8px' , marginTop:'10px' }}
          src={image}
          alt="animal-image"
        />
        
      ))}
      
    </div>
  ))}
</div>

</body>



  )
}

export default AnimalDetails