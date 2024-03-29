import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { FaAngleRight, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import miVariableGlobal from "../../global.js";

export default class AsignacionListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asignaciones: [],
      estado: 1,
      idrol: "",
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { estado } = this.state;
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .get(`${miVariableGlobal}LogIn/rol-token`)
      .then((response) => {
        const rol = response.data;
        this.setState({ idrol: rol });
        console.log("rol: " + rol);
        console.log("estado: " + estado);

        let url = "";

        if (parseInt(rol) === 1) {
          url = `${miVariableGlobal}AsignacionesUsuario/GetByEstadoId/${estado}`;
          // alert(rol);
        } else {
          url = `${miVariableGlobal}AsignacionesUsuario/GetByUsuarioAndEstado/${estado}`;
          //alert(rol);
        }

        axios
          .get(url)
          .then((response) => {
            this.setState({ asignaciones: response.data });
            console.log(response.data);
          })
          .catch((error) => {
            this.setState({ asignaciones: [] });
            console.error(error);

            axios
              .post(`${miVariableGlobal}logs`, {
                message: error.message,
                level: "ERROR",
                section: "AsignacionListComponent",
                IdUsuario: 4,
                Usuario: null,
              })
              .then((response) => {
                console.log("Log enviado al servidor");
              })
              .catch((error) => {
                console.error("Error al enviar el log al servidor", error);
              });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleDeleteUser = (idUsuario) => {
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .delete(`${miVariableGlobal}usuario/${idUsuario}`)
      .then((response) => {
        console.log("User deleted successfully");
        this.fetchUser();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleSetActive = () => {
    this.setState({ estado: 1 }, () => {
      this.fetchUser();
    });
  };

  handleSetInactive = () => {
    this.setState({ estado: 2 }, () => {
      this.fetchUser();
    });
  };

  handleActive = (idUsuario) => {
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .patch(`${miVariableGlobal}usuario/${idUsuario}/4`)
      .then((response) => {
        console.log("User deleted successfully");
        this.fetchUser();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { asignaciones, estado, idrol } = this.state;

    return (
      <div className="m-4">
        <div style={{ margin: "1.5rem" }}>
          <Link
            style={{ width: "80%", backgroundColor: "#2a411c" }}
            to="/asignacionForm"
            className="btn rounded-pill btn-block"
          >
            <span style={{ color: "white", fontSize: "30px" }}>
              Crear Nueva Tarea
            </span>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <button
            className={`btn rounded-pill ${
              estado === 1 ? "btn-success" : "btn-secondary"
            }`}
            style={{ color: "white", fontSize: "20px", width: "45%" }}
            type="button"
            onClick={this.handleSetActive}
            disabled={estado === 1}
          >
            PENDIENTES
          </button>
          <button
            className={`btn rounded-pill ${
              estado === 2 ? "btn-success" : "btn-secondary"
            }`}
            style={{ color: "white", fontSize: "20px", width: "45%" }}
            type="button"
            onClick={this.handleSetInactive}
            disabled={estado === 2}
          >
            COMPLETADAS
          </button>
        </div>

        <div className="Col" style={{ margin: "2rem 0.7rem" }}>
          {asignaciones.map((item) => (
            <div
              className="card"
              key={item.idAsignacionUsuario}
              style={{
                justifyContent: "center",
                borderColor: "#c0d904",
                height: "75px",
                marginBottom: "0.75rem",
              }}
            >
              <div className="row">
                <Col xs={10}>
                  <h5 className="card-title" style={{ color: "#bcbcbc" }}>
                    {item.asignacion.nombre} A {item.animal.nombre}
                  </h5>
                </Col>
                <Col xs={2} style={{ margin: "auto" }}>
                  {idrol !== 1 ? (
                    <Link
                      to={`/asignacionDetail/${item.idAsignacionUsuario}`}
                      style={{ color: "#bcbcbc", justifyContent: "center" }}
                    >
                      <FaAngleRight style={{ fontSize: "50px" }} />
                    </Link>
                  ) : (
                    <FaTrash
                      onClick={() => this.handleDeleteUser(item.idUsuario)}
                      style={{ fontSize: "30px", color: "red" }}
                    />
                  )}
                </Col>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
