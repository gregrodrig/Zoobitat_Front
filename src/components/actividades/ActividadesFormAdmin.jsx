import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import miVariableGlobal from "../../global.js";
import { Empty } from "components/emptyMsg/Empty.jsx";

export default class ActividadesFormAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idActividad: props.id || 0,
      titulo: "",
      descripcion: "",
      foto: "",
      fecha: "",
      idUbicacion: "",
      idUsuario: 0,
      ubicaciones: [],
      vacio: false,
    };
  }

  componentDidMount() {
    const { idActividad } = this.state;

    if (idActividad !== 0) {
      axios
        .get(`https://${miVariableGlobal}:7106/api/Actividades/${idActividad}`)
        .then((response) => {
          const actividad = response.data;

          console.log(actividad);
          this.setState({
            idActividad: idActividad,
            titulo: actividad.titulo,
            descripcion: actividad.descripcion,
            foto: actividad.foto,
            fecha: this.formatoFecha(actividad.fecha),
            idUbicacion: actividad.idUbicacion,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
    this.fetchUbicacion();
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

  fetchUbicacion = () => {
    axios
      .get(`https://${miVariableGlobal}:7106/api/Ubicacion`)
      .then((response) => {
        this.setState({ ubicaciones: response.data });
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
          foto: reader.result,
        });
      };

      reader.readAsDataURL(file);
    } catch (e) {
      this.setState({
        foto: null,
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

    const {
      idActividad,
      titulo,
      descripcion,
      foto,
      fecha,
      idUbicacion,
      vacio,
    } = this.state;
    if (foto !== "") {
      const actividadData = {
        id: idActividad,
        titulo: titulo,
        descripcion: descripcion,
        foto: foto,
        fecha: fecha,
        idUbicacion: idUbicacion,
        ubicacion: null,
        idUsuario: 0,
        usuario: null,
      };

      // Obtener el token del sessionStorage
      const token = sessionStorage.getItem("token");

      // Agregar el token al encabezado de la solicitud Axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const requestMethod = idActividad !== 0 ? "PUT" : "POST";
      const requestURL =
        idActividad !== 0
          ? `https://${miVariableGlobal}:7106/api/Actividades/${idActividad}`
          : `https://${miVariableGlobal}:7106/api/Actividades`;

      if (idActividad !== 0) {
        actividadData.idActividad = idActividad;
      }
      // Resto del código para enviar la solicitud utilizando axios y realizar acciones adicionales

      axios
        .request({
          method: requestMethod,
          url: requestURL,
          data: actividadData,
        })
        .then((response) => {
          console.log("Animal saved successfully");
          this.handleGoBack();
          // Resto del código para manejar la respuesta y realizar acciones adicionales
        })
        .catch((error) => {
          console.error(error);
          if (sessionStorage.getItem("token")) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          }

          axios
            .post(`https://${miVariableGlobal}:7106/api/logs`, {
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
    } else {
      this.setState({
        vacio: true,
      });
      setTimeout(() => {
        this.setState({
          vacio: false,
        });
      }, 2000);
    }
  };

  render() {
    const {
      idActividad,
      titulo,
      descripcion,
      foto,
      fecha,
      idUbicacion,
      ubicaciones,
      vacio,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Col className="text-center">
          <div className="d-flex justify-content-center align-items-center mb-4">
            {vacio ? <Empty msg="msgNoGuardado" /> : null}
            {foto ? (
              <label htmlFor="imageInput">
                <img
                  src={foto}
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
            <input
              type="date"
              name="fecha"
              value={fecha}
              onChange={this.handleInputChange}
              placeholder="Fecha"
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
              name="idUbicacion"
              value={idUbicacion}
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
              <option value="">Seleccione una especie</option>
              {ubicaciones.map((ubicacion) => (
                <option key={ubicacion.id} value={ubicacion.id}>
                  {ubicacion.nombre}
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
