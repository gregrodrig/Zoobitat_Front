import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Habitat.css'

function Habitat() {

    const [Habiat, setHabitat] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7106/api/habitat')
      .then((response) => response.json())
      .then((data) => setHabitat(data))
      .catch((error) => console.error(error));
  }, []);


return (
<div className="main">
<header className="contacto-header">
<h1 className="contacto-title">Habitat</h1>
<p className="contacto-description">
Descubre la maravillosa diversidad de los hábitats naturales de nuestro zoológico
</p>
</header>

<Container className=''>
{Habiat.map((habitat) => (
<img src={habitat.imagen} alt={habitat.nombre} className="img-fluid" />

))}

</Container>
</div>
);
}

export default Habitat;

