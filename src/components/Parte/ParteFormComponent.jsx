import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import miVariableGlobal from "../../global.js";

export default class ParteFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalSelect: [],

      titulo: "",
      animal: "",
      observaciones: "",
    };
  }

  componentDidMount() {
    this.fetchUsuario();
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  fetchUsuario = () => {
    // Obtener el token del sessionStorage
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .get(`${miVariableGlobal}animal`)
      .then((response) => {
        this.setState({ animalSelect: response.data });
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
          image: reader.result,
        });
      };
    } catch (e) {
      console.log(e.message);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { titulo, animal, observaciones, animalSelect } = this.state;

    const asignacionuser = {
      idParte: 0,
      titulo: titulo,
      idAnimal: animal,
      animal: null,
      observaciones: observaciones,
      estado: 1,
    };

    // Obtener el token del sessionStorage
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .post(`${miVariableGlobal}parte`, asignacionuser)
      .then((response) => {
        console.log("Animal saved successfully");

        // Realizar acciones adicionales después de guardar el animal
      })
      .catch((error) => {
        console.error(error);
        if (sessionStorage.getItem("token")) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${sessionStorage.getItem("token")}`;
        }
        axios
          .post(`${miVariableGlobal}logs`, {
            message: error,
            level: "ERROR",
            section: "ParteFormComponent",
            IdUsuario: 4,
            Usuario: null,
          })
          .then((response) => {
            console.log("Log enviado al servidor");
          })
          .catch((error) => {
            console.error("Error al enviar el log al servidor", error);
          });
        alert("error");
        // Manejar el error en caso de que ocurra
      });
  };

  render() {
    const { titulo, animal, observaciones, animalSelect } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Col className="text-center">
          <div>
            <input
              type="text"
              name="titulo"
              value={titulo}
              onChange={this.handleInputChange}
              placeholder="titulo"
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
              name="animal"
              value={animal}
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
              <option value="">Seleccione un animal</option>
              {animalSelect.map((item) => (
                <option key={item.idAnimal} value={item.idAnimal}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              placeholder="Observaciones"
              name="observaciones"
              value={observaciones}
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
