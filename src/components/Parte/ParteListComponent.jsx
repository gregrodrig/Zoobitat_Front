import React, { Component } from 'react'
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { FaAngleRight, FaCheck, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class ParteListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          partes: [],
         
         
        };
      }
    
      componentDidMount() {
        this.fetchParte();
      }
    
    
      fetchParte = () => {

        const { partes } = this.state;
       
        const token = sessionStorage.getItem('token');
      
        // Agregar el token al encabezado de la solicitud Axios
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
       

      
          
             let url = `https://localhost:7106/api/parte`;
             // alert(rol);
           
      
            axios
              .get(url)
              .then(response => {
                this.setState({ partes: response.data });
                console.log(response.data);
              })
              .catch(error => {
                this.setState({ partes: [] });
                console.error(error);
              });
          
      };
      
    
      handleDeleteUser = idUsuario => {
        const token = sessionStorage.getItem('token');
    
        // Agregar el token al encabezado de la solicitud Axios
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
        axios
          .delete(`https://localhost:7106/api/usuario/${idUsuario}`)
          .then(response => {
            console.log('User deleted successfully');
            this.fetchUser();
          })
          .catch(error => {
            console.error(error);
          });
      };
    
      
    
      render() {
        const { partes } = this.state;
    
        return (
          <div>
             <div style={{width:"100%", margin:"10px"}} >
                <Link style={{width:"90%", backgroundColor:"#2a411c"}} to="/parteform"  className="btn rounded-pill btn-block">
                <span style={{ color: 'white', fontSize:"30px" }}>CREAR NUEVO PARTE</span>
            </Link>

        </div>
    
            <div className="Col" style={{ margin: '10px' }}>
              {partes.map(item => (
                <div className="card" key={item.idParte} style={{ justifyContent:"center", borderColor:"#c0d904",height:"75px"}}>
                  <div className="row">
                    <Col xs={10}>
                      <h5 className="card-title" style={{ color: '#bcbcbc' }}>
                      {item.titulo}
                      </h5>                  
                    </Col>
                    <Col xs={2}  >
                 
                    <Link to={`/partedetail/${item.idParte}`} style={{ color: '#bcbcbc', justifyContent:"center" }} > 
                            <FaAngleRight style={{ fontSize: '50px' }} /> 
                          </Link> 
                   
                    </Col>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
    