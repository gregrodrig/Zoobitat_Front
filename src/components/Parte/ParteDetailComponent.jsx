import axios from 'axios';
import React, { Component } from 'react'

export default class ParteDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          parte: null,
          loading: true,
          error: false,
        };
      }
    
      componentDidMount() {
        const { idParte } = this.props;
    
        const token = sessionStorage.getItem('token');
  
    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios
          .get(`https://${global}:7106/api/parte/${idParte}`)
          .then(response => {
            const Resparte = response.data;
            console.log(Resparte);
            this.setState({
                parte: Resparte,
              loading: false,
              error: false,
            });
          })
          .catch(error => {
            console.error(error);
            axios
        .post(`https://${global}:7106/api/logs`, {
          message: error.message,
          level: 'ERROR',
          section: 'ParteDetailComponent',
        })
        .then((response) => {
          console.log('Log enviado al servidor')
        })
        .catch((error) => {
          console.error('Error al enviar el log al servidor', error)
        })
            this.setState({
              loading: false,
              error: true,
            });
          });
      }
    
      handleChangeEstado = () => {
        const { parte } = this.state;
        const { idParte } = this.props;
        const token = sessionStorage.getItem('token');
  
        // Agregar el token al encabezado de la solicitud Axios
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
        axios
          .patch(`https://${global}:7106/api/Parte/ChangeEstado/${idParte}/2`)
          .then(response => {
            console.log(response.data);
            window.history.back();
            // Aquí puedes manejar la respuesta del PUT si es necesario
          })
          .catch(error => {
            console.error(error);
            // Aquí puedes manejar los errores del PUT si es necesario
          });
          
      };
    
      render() {
        const { parte, loading, error } = this.state;
        const idEstadoAsignacion =  parte?.estado;
    
        if (loading) {
          return <div>Loading...</div>;
        }
    
        if (error) {
          return <div>Error al cargar la asignación</div>;
        }
    
        return (
          <div className="container">
            <h2>Detalles de la asignación</h2>
    
            {parte && (
              <div className="info-container">
                <p className="title">Nombre de la asignación:</p>
                <p>{parte.titulo}</p>
                <p className="title">Nombre del animal:</p>
                <p>{parte.animal.nombre}</p>
                <p className="title">Notas:</p>
                <p>{parte.observaciones}</p>
              </div>
            )}
    
            <div style={{ width: '100%', margin: '10px' }}>
              <button
                style={{ width: '90%', backgroundColor: '#2a411c' }}
                className="btn rounded-pill btn-block"
                disabled={idEstadoAsignacion !== 1}
                onClick={this.handleChangeEstado}
              >
                <span style={{ color: 'white', fontSize: '30px' }}>Terminada</span>
              </button>
            </div>
    
            <style>{`
              .container {
                display: flex;
                align-items: center;
                height: 100vh;
                flex-direction: column;
              }
    
              .info-container {
                width: 50%;
                text-align: center;
              }
    
              .title {
                font-size: 12px;
                margin-bottom: 5px;
                color: #bcbcbc;
              }
            `}</style>
          </div>
        );
      }
    }
    