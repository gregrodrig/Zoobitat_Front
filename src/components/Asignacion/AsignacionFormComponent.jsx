import React, { Component } from 'react';
import axios from 'axios';
import { Col, Container } from 'react-bootstrap';
import { FaCamera } from 'react-icons/fa';

export default class AsignacionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

      usuarioSelect: [],
      asignacionSelect: [],
      animalSelect:[],

      usuario: '',
      animal: '',
      asignacion:"",
      descripcion:"",
     
    };
  }

  componentDidMount() {
    this.fetchUsuario();
  }

  fetchUsuario = () => {

     // Obtener el token del sessionStorage
     const token = sessionStorage.getItem('token');
  
     // Agregar el token al encabezado de la solicitud Axios
     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get('https://localhost:7106/api/Usuario/usuariosempl')
      .then(response => {
        this.setState({ usuarioSelect: response.data });
      })
      .catch(error => {
        console.error(error);
      });

      axios
      .get('https://localhost:7106/api/Asignacion')
      .then(response => {
        this.setState({ asignacionSelect: response.data });
      })
      .catch(error => {
        console.error(error);
      });


      axios
      .get('https://localhost:7106/api/animal')
      .then(response => {
        this.setState({ animalSelect: response.data });
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
  
    const { usuario, asignacion, animal,descripcion} = this.state;
  
    const asignacionuser = {
      idAsignacionUsuario: 0,
      idUsuario: usuario,
      usuario:null,
      idUsuarioMandante: 0,
      usuarioMandante: null,
      idAnimal: animal,
      animal: null,
      idEstadoAsignacion: 1,
      estadoAsignacion: null,
      idAsignacion: asignacion,
      asignacion: null,
      notas:descripcion
    };
  
    // Obtener el token del sessionStorage
    const token = sessionStorage.getItem('token');
  
    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
    axios
      .post('https://localhost:7106/api/AsignacionesUsuario', asignacionuser)
      .then(response => {
        console.log('Animal saved successfully');
       
        // Realizar acciones adicionales después de guardar el animal
      })
      .catch(error => {
        axios
        .post('https://localhost:7106/api/logs', {
          message: error,
          level: 'ERROR',
          section: 'AsignacionFormComponent',
        })
        .then((response) => {
          console.log('Log enviado al servidor')
        })
        .catch((error) => {
          console.error('Error al enviar el log al servidor', error)
        })
        console.error(error);
        alert("error");
        // Manejar el error en caso de que ocurra
      });
  };
  

  render() {
    const { usuario, asignacion, animal, usuarioSelect,asignacionSelect, animalSelect,descripcion} = this.state;

    return (

      <form onSubmit={this.handleSubmit}>
   
        <Col className="text-center">
          


          <div>
              <select name="animal" value={animal} onChange={this.handleInputChange}  style={{ width:"95%", border:"none", backgroundColor: 'lightgray', marginBottom: '10px'  ,height:"50px", borderRadius: '5px',}}>
              <option value="">Seleccione un animal</option>
              {animalSelect.map(item => (
                <option key={item.idAnimal} value={item.idAnimal}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>

          

          <div>
              <select name="asignacion" value={asignacion} onChange={this.handleInputChange}  style={{ width:"95%", border:"none", backgroundColor: 'lightgray', marginBottom: '10px'  ,height:"50px", borderRadius: '5px',}}>
              <option value="">Seleccione un tipo de asignacion</option>
              {asignacionSelect.map(item => (
                <option key={item.idAsignacion} value={item.idAsignacion}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
              <select name="usuario" value={usuario} onChange={this.handleInputChange}  style={{ width:"95%", border:"none", backgroundColor: 'lightgray', marginBottom: '10px'  ,height:"50px", borderRadius: '5px',}}>
              <option value="">Seleccione un usuario</option>
              {usuarioSelect.map(item => (
                <option key={item.idUsuario} value={item.idUsuario}>
                  {item.nombre}
                </option>
              ))}
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
