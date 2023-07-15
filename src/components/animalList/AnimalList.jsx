import React, { useEffect, useState } from 'react'
import { Card, Button, Container ,Row ,Col} from 'react-bootstrap';
import './AnimalList.css'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../index.css"
import axios from 'axios';
import miVariableGlobal from '../../global.js';


function AnimalList() {

  const [animalsData, setAnimalsData] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    }


    fetch(`https://${miVariableGlobal}:7106/api/especie`)
      .then((response) => response.json())
      .then((data) => setAnimalsData(data))
      .catch((error) => 
      
      
      axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: error.message,
        level: 'ERROR',
        section: 'AnimalList',
        IdUsuario: 4,
          Usuario: null
      
      })
      .then((response) => {
        console.log('Log enviado al servidor')
      })
      .catch((error) => {
        console.error('Error al enviar el log al servidor', error)
      })
      
      );
  }, []);
  

  return (

<div className='main'> 


<div className="detailsContainer">

  {animalsData.map((animal) => (
    <div className="animalContainer" key={animal.idAnimal}>
      <Container>
        <Row>
          <Col> 
        <img 
        style={{marginRight:'-5px' ,borderRadius:'5px' , height:'190px', width:'190px',marginBottom:'7px'}}
          className="col animalImage"
          src={animal.icono}
          alt={animal.nombre}
        />
        </Col>
        <Col>
      <div className="animalDetailsContainer">
        <div className="firstItem">
        <Link  to={`/AnimalDetails/${animal.idEspecie}`}>
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