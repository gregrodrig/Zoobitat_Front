import axios from "axios";
import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import miVariableGlobal from '../../global.js';


export default class HabitatsFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idHabitat: props.idHabitat || 0,

      nombre: "",
      imagen: "",
      descripcion: "",
      idTipoHabitat: 0,

      tipoHabitatList: [],
    };
  }

  componentDidMount() {
    const { idHabitat } = this.state;

    if (idHabitat !== 0) {
      axios
        .get(`https://${miVariableGlobal}:7106/api/habitat/${idHabitat}`)
        .then((response) => {
          const habitatData = response.data;

          console.log(habitatData);
          this.setState({
            nombre: habitatData.nombre,
            imagen: habitatData.imagen,
            descripcion: habitatData.descripcion,
            idTipoHabitat: habitatData.idTipoHabitat,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    this.fetchTipoHabitat();
  }

  formatoFecha = (fechaHora) => {
    const fecha = new Date(fechaHora);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();

    // Formatear la fecha en el formato yyyy-mm-dd
    const mesFormateado = mes < 10 ? `0${mes}` : mes;
    const diaFormateado = dia < 10 ? `0${dia}` : dia;

    return `${año}-${mesFormateado}-${diaFormateado}`;
  };

  fetchTipoHabitat = () => {
    axios
      .get(`https://${miVariableGlobal}:7106/api/TipoHabitat`)
      .then((response) => {
        this.setState({ tipoHabitatList: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleImageUpload = (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          imagen: reader.result,
        });
      };

      reader.readAsDataURL(file);
    } catch (e) {
      this.setState({
        imagen: null,
      });
    }
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      idHabitat,
      nombre,
      imagen,
      descripcion,
      idTipoHabitat,
      tipoHabitatList,
    } = this.state;

    alert(idHabitat);
    const habitatData = {
      idHabitat: 0,
      nombre: nombre,
      imagen: imagen,
      descripcion: descripcion,
      idTipoHabitat: idTipoHabitat,
      tipoHabitat: null,
    };

    // Obtener el token del sessionStorage
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const requestMethod = idHabitat !== 0 ? "PUT" : "POST";
    const requestURL =
      idHabitat !== 0
        ? `https://${miVariableGlobal}:7106/api/habitat/${idHabitat}`
        : `https://${miVariableGlobal}:7106/api/habitat`;

    if (idHabitat !== 0) {
      habitatData.idHabitat = idHabitat;
    }
    // Resto del código para enviar la solicitud utilizando axios y realizar acciones adicionales

    axios
      .request({
        method: requestMethod,
        url: requestURL,
        data: habitatData,
      })
      .then((response) => {
        console.log("Animal saved successfully");
        // Resto del código para manejar la respuesta y realizar acciones adicionales
      })
      .catch((error) => {
        console.error(error);
        if (sessionStorage.getItem('token')) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
        }

        axios
        .post(`https://${miVariableGlobal}:7106/api/logs`, {
          message: error.message,
          level: 'ERROR',
          section: 'HabitatsFormComponent',
          IdUsuario: 4,
          Usuario: null
        },
        )
        .then((response) => {
          console.log('Log enviado al servidor')
        })
        .catch((error) => {
          console.error('Error al enviar el log al servidor', error)
        })
        // Resto del código para manejar el error
      });
  };

  render() {
    const { nombre, imagen, descripcion, idTipoHabitat, tipoHabitatList } =
      this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Col className="text-center">
          <div className="d-flex justify-content-center align-items-center mb-4">
            {imagen ? (
              <label htmlFor="imageInput">
                <img
                  src={imagen}
                  alt="Preview"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                />
              </label>
            ) : (
              <label htmlFor="imageInput">
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    backgroundColor: "#4f7302",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaCamera style={{ fontSize: "40px", color: "white" }} />
                </div>
              </label>
            )}
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
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
              style={{
                width: "95%",
                border: "none",
                backgroundColor: "lightgray",
                marginBottom: "10px",
                height: "50px",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>

          <div>
            <select
              name="idTipoHabitat"
              value={idTipoHabitat}
              onChange={this.handleInputChange}
              style={{
                width: "95%",
                border: "none",
                backgroundColor: "lightgray",
                marginBottom: "10px",
                height: "50px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <option value="">Seleccione un tipo de habitat</option>
              {tipoHabitatList.map((habitat) => (
                <option
                  key={habitat.idTipoHabitat}
                  value={habitat.idTipoHabitat}
                >
                  {habitat.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              placeholder="Descripcion"
              name="descripcion"
              value={descripcion}
              onChange={this.handleInputChange}
              style={{
                width: "95%",
                border: "none",
                backgroundColor: "lightgray",
                marginBottom: "10px",
                height: "150px",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>

          <div style={{ width: "100%", margin: "10px" }}>
            <button
              className="btn rounded-pill btn-block"
              style={{
                color: "white",
                fontSize: "30px",
                width: "90%",
                backgroundColor: "#2a411c",
              }}
              type="submit"
            >
              Guardar
            </button>
          </div>
        </Col>
      </form>
    );
  }
}
