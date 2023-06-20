import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { FaAngleRight, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      .get("https://localhost:7106/api/LogIn/rol-token")
      .then((response) => {
        const rol = response.data;
        this.setState({ idrol: rol });
        console.log("rol: " + rol);
        console.log("estado: " + estado);

        let url = "";

        if (parseInt(rol) === 1) {
          url = `https://localhost:7106/api/AsignacionesUsuario/GetByEstadoId/${estado}`;
          // alert(rol);
        } else {
          url = `https://localhost:7106/api/AsignacionesUsuario/GetByUsuarioAndEstado/${estado}`;
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
        .post('https://localhost:7106/api/logs', {
          message: error,
          level: 'ERROR',
          section: 'AsignacionListComponent',
        })
        .then((response) => {
          console.log('Log enviado al servidor')
        })
        .catch((error) => {
          console.error('Error al enviar el log al servidor', error)
        })
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
      .delete(`https://localhost:7106/api/usuario/${idUsuario}`)
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
      .patch(`https://localhost:7106/api/usuario/${idUsuario}/4`)
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
      <div>
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

        <div className="Col" style={{ margin: "10px" }}>
          {asignaciones.map((item) => (
            <div
              className="card"
              key={item.idAsignacionUsuario}
              style={{
                justifyContent: "center",
                borderColor: "#c0d904",
                height: "75px",
              }}
            >
              <div className="row">
                <Col xs={10}>
                  <h5 className="card-title" style={{ color: "#bcbcbc" }}>
                    {item.asignacion.nombre} A {item.animal.nombre}
                  </h5>
                </Col>
                <Col xs={2}>
                  {idrol != 1 ? (
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
