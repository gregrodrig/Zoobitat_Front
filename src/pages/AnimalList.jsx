import React from 'react'
import { Card, Button, Container ,Row ,Col} from 'react-bootstrap';
import './AnimalList.css'
import { Form } from 'react-bootstrap';
function AnimalList() {
  const animalsData = [
    {
      idAnimal: 1,
      imagen: "/assets/elephantAfricano.jpg",
      nombre: "Elefante Africano ",
      informacion: "El elefante africano es la especie de elefante mas grande y habita en diversas"
    },
    {
      idAnimal: 2,
      imagen: "/assets/Tiger.jpg",
      nombre: "Tiger",
      informacion: "El tigre es una especie de felino que habita en varios hábitats,inclyuendo selv.. "
    },
    {
      idAnimal: 3,
      imagen: "/assets/Chamaleon.jpg",
      nombre: "Cameleon",
      informacion: "Los Camaleones son conocidos por sus capacidad unica de cambiar el color.."
    },
  ];

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
          src={animal.imagen}
          alt={animal.nombre}
        />
        </Col>
        <Col>
      <div className="animalDetailsContainer">
        <div className="firstItem">
          <p>
            <strong>{animal.nombre}</strong>
          </p>
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