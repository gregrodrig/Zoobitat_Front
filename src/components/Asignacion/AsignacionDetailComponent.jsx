import React, { Component } from 'react';
import axios from 'axios';
import miVariableGlobal from '../../global.js';

export default class AsignacionDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asignacion: null,
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    const { idasignacion } = this.props;

    axios
      .get(`https://${miVariableGlobal}:7106/api/asignacionesusuario/${idasignacion}`)
      .then(response => {
        const asignacionData = response.data;
        console.log(asignacionData);
        this.setState({
          asignacion: asignacionData,
          loading: false,
          error: false,
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  handleChangeEstado = () => {
    const { asignacion } = this.state;
    const { idAsignacionUsuario } = asignacion;

    axios
      .put(`https://${miVariableGlobal}:7106/api/AsignacionesUsuario/ChangeEstado/2/${idAsignacionUsuario}`)
      .then(response => {
        console.log(response.data);
        // Aquí puedes manejar la respuesta del PUT si es necesario
      })
      .catch(error => {
        console.error(error);
        // Aquí puedes manejar los errores del PUT si es necesario
      });
      window.history.back();
  };

  render() {
    const { asignacion, loading, error } = this.state;
    const idEstadoAsignacion = asignacion?.idEstadoAsignacion;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error al cargar la asignación</div>;
    }

    return (
      <div className="container">
        <h2>Detalles de la asignación</h2>

        {asignacion && (
          <div className="info-container">
            <p className="title">Nombre de la asignación:</p>
            <p>{asignacion.asignacion.nombre}</p>
            <p className="title">Nombre del animal:</p>
            <p>{asignacion.animal.nombre}</p>
            <p className="title">Hábitat del animal:</p>
            <p>{asignacion.animal.habitat.nombre}</p>
            <p className="title">Notas:</p>
            <p>{asignacion.notas}</p>
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
