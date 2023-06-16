import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Habitat.css'
import "../index.css"
import { auto } from '@popperjs/core';

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

<div>
      <Container>
        <Row>
          {Habiat.map((habitat) => (
            <Col xs={12} md={4} key={habitat.nombre} style={{ margin: '10px' }}>
              
                <img src={habitat.imagen} alt={habitat.nombre} style={{ width: '200px', height: 'auto' }} />
                <h6 style={{ color: 'var(--MediumGreen)' }}>{habitat.nombre}</h6>
              
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </div>
);
}

export default Habitat;

