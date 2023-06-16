import React, { useEffect, useState } from 'react'
import { Card, Button, Container ,Row ,Col} from 'react-bootstrap';
import './AnimalList.css'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function AnimalList() {

  const [animalsData, setAnimalsData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7106/api/especie')
      .then((response) => response.json())
      .then((data) => setAnimalsData(data))
      .catch((error) => console.error(error));
  }, []);
  

  return (

<div className='main'> 
<header className='page-header'> 
   <h1 className='page-title' > Animales </h1>
   <p className='page-description'> Paragraph lorem ipsum dolor inline text link sit amet consectetuer adispicing elit.</p>
</header>
<Form.Group className="mb-3" controlId="formGroupFilter">
  <Form.Select
    style={{ backgroundColor: 'white', height: "55px", width:'90%', marginLeft:'20px' , marginTop:'20px', borderRadius: '5px' }}
    aria-label="Filtrar Por"
  >
    <option>Filtrar por</option>
    <option></option>
    <option></option>
    <option></option>
    <option></option>
  </Form.Select>
</Form.Group>
<Form.Group className="mb-3" controlId="formGroupSelecionne">
  <Form.Select
    style={{ backgroundColor: '#EBEBEB', height: "55px", width:'90%', marginLeft:'20px' , marginTop:'-10px', borderRadius: '5px' }}
    aria-label="Filtrar Por"
  >
    <option className="select-option" value="">Seleccione </option>
    <option></option>
    <option></option>
    <option></option>
    <option></option>
  </Form.Select>
</Form.Group>
<div className="detailsContainer">
  {animalsData.map((animal) => (
    <div className="animalContainer" key={animal.idAnimal}>
      <Container>
        <Row>
          <Col> 
        <img 
        style={{marginRight:'-5px' ,borderRadius:'5px' , height:'100px', width:'100px',marginBottom:'7px'}}
          className="col animalImage"
          src={animal.icono}
          alt={animal.nombre}
        />
        </Col>
        <Col>
      <div className="animalDetailsContainer">
        <div className="firstItem">
        <Link to={`/animal/${animal.idEspecie}`}>
                <p>
                <strong>{animal.nombre}</strong>
                </p> 
        </Link>
        </div>
        <div className="information">
          <p>
            <span>{animal.informacion}</span>
          </p>
        </div>
      </div>
      </Col>

      </Row>
      </Container>
    </div>
  ))}
</div>


    </div>
  )
}

export default AnimalList