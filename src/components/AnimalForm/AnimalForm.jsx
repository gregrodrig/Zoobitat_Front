import React, { Component } from 'react';
import axios from 'axios';
import { Col, Container } from 'react-bootstrap';
import { FaCamera } from 'react-icons/fa';

export default class AnimalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      nombre: '',
      edad: '',
      especie: '',
      genero: '',
      descripcion: '',
      fechaNacimiento:"",
      peso:"",
      especies: [],
    };
  }

  componentDidMount() {
    this.fetchEspecies();
  }

  fetchEspecies = () => {
    axios
      .get('https://localhost:7106/api/Especie')
      .then(response => {
        this.setState({ especies: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleImageUpload = event => {
    try{
      const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
    }
    catch(e){
      this.setState({
        image: null,
      });

    }
    
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  
    const { image, nombre, edad, especie, genero, descripcion, fechaNacimiento, peso } = this.state;
  
    const animalData = {
      idAnimal: 0,
      idEspecie: especie,
      especie: null,
      nombre: nombre,
      idEstado: 1,
      estado: null,
      fechaNacimiento: fechaNacimiento,
      idHabitat: 1,
      habitat: null,
      informacion: descripcion,
      imagen: image,
      sexo: genero,
      peso: peso
    };
  
    // Obtener el token del sessionStorage
    const token = sessionStorage.getItem('token');
  
    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
    axios
      .post('https://localhost:7106/api/animal', animalData)
      .then(response => {
        console.log('Animal saved successfully');
        alert("hay que mamartelo");
        // Realizar acciones adicionales después de guardar el animal
      })
      .catch(error => {
        console.error(error);
        alert("error");
        // Manejar el error en caso de que ocurra
      });
  };
  

  render() {
    const { image, nombre, edad, especie, genero, descripcion, especies,fechaNacimiento,peso  } = this.state;

    return (

      <form onSubmit={this.handleSubmit}>
   
        <Col className="text-center">
          <div className="d-flex justify-content-center align-items-center mb-4">
            {image ? (
                <label htmlFor="imageInput">
                  <img src={image} alt="Preview" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                </label>
              
            ) : (
              <label htmlFor="imageInput">
                <div
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    backgroundColor: '#4f7302',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FaCamera style={{ fontSize: '40px', color: 'white' }} />
                </div>
              </label>
            )}
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={this.handleImageUpload}
            />
          </div>



       <div>
        <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={this.handleInputChange}
              placeholder="Nombre"
              style={{ width:"95%", border:"none", backgroundColor: 'lightgray', marginBottom: '10px' , height:"50px", borderRadius: '5px',}}
            />
       </div>
       <div>
         <input
              type="number"
              name="edad"
              value={edad}
              onChange={this.handleInputChange}
              placeholder="Edad"
              style={{ width:"95%", border:"none", backgroundColor: 'lightgray', marginBottom: '10px'  ,height:"50px", borderRadius: '5px',}}
            />

       </div>

       <div>
       <input
  type="number"
  name="peso" 
  value={peso}
  onChange={this.handleInputChange}
  placeholder="Peso"
  style={{ width: "95%", border: "none", backgroundColor: 'lightgray', marginBottom: '10px', height: "50px", borderRadius: '5px', }}
/>

       </div>


       <div>
       <input
  type="date"
  name="fechaNacimiento" 
  value={fechaNacimiento}
  onChange={this.handleInputChange}
  placeholder="Fecha"
  style={{ width: "95%", border: "none", backgroundColor: 'lightgray', marginBottom: '10px', height: "50px", borderRadius: '5px', }}
/>

       </div>






       




       <div>
              <select name="especie" value={especie} onChange={this.handleInputChange}  style={{ width:"95%", border:"none", backgroundColor: 'lightgray', marginBottom: '10px'  ,height:"50px", borderRadius: '5px',}}>
              <option value="">Seleccione una especie</option>
              {especies.map(especie => (
                <option key={especie.idEspecie} value={especie.idEspecie}>
                  {especie.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            
            <select name="genero" value={genero} onChange={this.handleInputChange}  style={{ width:"95%", border:"none", backgroundColor: 'lightgray', marginBottom: '10px'  ,height:"50px", borderRadius: '5px',}}>
              <option value="">Seleccione un género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
          <div>
            
            <textarea placeholder='Descripcion' name="descripcion" value={descripcion} onChange={this.handleInputChange}   style={{ width:"95%", border:"none", backgroundColor: 'lightgray', marginBottom: '10px'  ,height:"150px", borderRadius: '5px',}}/>
          </div>
           
          <div style={{width:"100%", margin:"10px"}}  >
            
            <button className="btn rounded-pill btn-block" style={{ color: 'white', fontSize:"30px" ,width:"90%", backgroundColor:"#2a411c"}} type="submit">Guardar</button>
        </div>

          
          
        </Col>
        </form>
   
    );
  }
}
