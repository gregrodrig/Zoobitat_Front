import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaAngleRight, FaCheck, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class UsuarioListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      idRol: 1,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { idRol } = this.state;
    const token = sessionStorage.getItem('token');

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    let url = '';

    if (idRol === 2) {
      url = 'https://localhost:7106/api/Usuario/usuarios/rol5';
    } else {
      url = 'https://localhost:7106/api/usuario';
    }

    axios
      .get(url)
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(error => {
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

  handleSetActive = () => {
    this.setState({ idRol: 1 }, () => {
      this.fetchUser();
    });
  };

  handleSetInactive = () => {
    this.setState({ idRol: 2 }, () => {
      this.fetchUser();
    });
  };

  
  handleActive = idUsuario => {
    const token = sessionStorage.getItem('token');

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    axios
      .patch(`https://localhost:7106/api/usuario/${idUsuario}/4`)
      .then(response => {
        console.log('User deleted successfully');
        this.fetchUser();
      })
      .catch(error => {
        console.error(error);
      });
  };

  

  render() {
    const { user, idRol } = this.state;

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
          <button
            className={`btn rounded-pill ${idRol === 1 ? 'btn-primary' : 'btn-secondary'}`}
            style={{ color: 'white', fontSize: '20px', width: '45%' }}
            type="button"
            onClick={this.handleSetActive}
            disabled={idRol === 1}
          >
            Activo
          </button>
          <button
            className={`btn rounded-pill ${idRol === 2 ? 'btn-primary' : 'btn-secondary'}`}
            style={{ color: 'white', fontSize: '20px', width: '45%' }}
            type="button"
            onClick={this.handleSetInactive}
            disabled={idRol === 2}
          >
            Inactivo
          </button>
        </div>

        <div className="Col" style={{ margin: '10px' }}>
          {user.map(item => (
            <div className="card" key={item.idUsuario}>
              <div className="row">
                <Col xs={7}>
                  <h5 className="card-title" style={{ color: 'green' }}>
                    {item.email}
                  </h5>
                  <p className="card-text text-muted">{item.nombre} ({item.rol.nombre})</p>
                </Col>
                <Col xs={3} style={{ alignSelf: 'center' }}>
                  <Row>
                    <FaTrash
                      onClick={() => this.handleDeleteUser(item.idUsuario)}
                      style={{ fontSize: '30px', color: 'red' }}
                    />
                  </Row>
                </Col>
                <Col xs={2} style={{ alignSelf: 'center' }}>
                  
                    { item.idRol != 5 ? 
                        <Link to={`/userForm/${item.idUsuario}`} style={{ color: 'black' }} className="me-2"> <FaAngleRight style={{ fontSize: '30px' }} /> </Link> :  
                    
                    
                        <FaCheck onClick={() => this.handleActive(item.idUsuario)} style={{fontSize: '30px' ,color: 'green'  }} />
                    }
                    
                  
                </Col>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
