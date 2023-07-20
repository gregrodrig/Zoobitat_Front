import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import miVariableGlobal from "../../global.js";

export default class NoticiasFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idNotica: props.id || 0,
      titulo: "",
      imagen: "",
      cuerpo: "",

      idUsuario: 0,
      usuario: null,
      fecha: "2023-07-16T17:37:50.791Z",
    };
  }

  componentDidMount() {
    const { idNotica } = this.state;

    if (idNotica !== 0) {
      axios
        .get(`${miVariableGlobal}Noticia/${idNotica}`)
        .then((response) => {
          const noticia = response.data;

          console.log(noticia);
          this.setState({
            idNotica: noticia.idNotica,
            titulo: noticia.titulo,
            imagen: noticia.imagen,
            cuerpo: noticia.cuerpo,
            idUsuario: noticia.idUsuario,
            usuario: noticia.usuario,
            fecha: noticia.fecha,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
        image: null,
      });
    }
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleGoBack = () => {
    window.history.back();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { cuerpo, imagen, titulo, idNotica, fecha, usuario, idUsuario } =
      this.state;

    const noticiaData = {
      idNotica: idNotica,
      titulo: titulo,
      imagen: imagen,
      cuerpo: cuerpo,
      idUsuario: idUsuario,
      usuario: usuario,
      fecha: fecha,
    };

    // Obtener el token del sessionStorage
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const requestMethod = idNotica !== 0 ? "PUT" : "POST";
    const requestURL =
      idNotica !== 0
        ? `${miVariableGlobal}Noticia/${idNotica}`
        : `${miVariableGlobal}Noticia`;

    if (idNotica !== 0) {
      noticiaData.idNotica = idNotica;
    }
    // Resto del código para enviar la solicitud utilizando axios y realizar acciones adicionales

    axios
      .request({
        method: requestMethod,
        url: requestURL,
        data: noticiaData,
      })
      .then((response) => {
        console.log("Noticia saved successfully");
        this.handleGoBack();

        // Resto del código para manejar la respuesta y realizar acciones adicionales
      })

      .catch((error) => {
        console.error(error);
        if (sessionStorage.getItem("token")) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        axios
          .post(`${miVariableGlobal}logs`, {
            message: error.message,
            level: "ERROR",
            section: "AnimalForm",
            IdUsuario: 4,
            Usuario: null,
          })
          .then((response) => {
            console.log("Log enviado al servidor");
          })
          .catch((error) => {
            console.error("Error al enviar el log al servidor", error);
          });
        // Resto del código para manejar el error
      });
  };

  render() {
    const { cuerpo, imagen, titulo, idNotica } = this.state;

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
              style={{ display: "none", padding: "10px" }}
              onChange={this.handleImageUpload}
            />
          </div>

          <div>
            <input
              type="text"
              name="titulo"
              value={titulo}
              onChange={this.handleInputChange}
              placeholder="Titulo"
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
            <textarea
              placeholder="Cuerpo"
              name="cuerpo"
              value={cuerpo}
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
