import axios from "axios";
import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaAngleRight, FaCheck, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import miVariableGlobal from "../../global.js";
import "./../../index.css";

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
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    let url = "";

    if (idRol === 2) {
      url = `https://${miVariableGlobal}:7106/api/Usuario/usuarios/rol5`;
    } else {
      url = `https://${miVariableGlobal}:7106/api/usuario`;
    }

    axios
      .get(url)
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        if (sessionStorage.getItem("token")) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${sessionStorage.getItem("token")}`;
        }
        axios
          .post(`https://${miVariableGlobal}:7106/api/logs`, {
            message: error.message,
            level: "ERROR",
            section: "UsuarioListComponent",
            IdUsuario: 4,
            Usuario: null,
          })
          .then((response) => {
            console.log("Log enviado al servidor");
          })
          .catch((error) => {
            console.error("Error al enviar el log al servidor", error);
          });
        console.error(error);
      });
  };

  handleDeleteUser = (idUsuario) => {
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .delete(`https://${miVariableGlobal}:7106/api/usuario/${idUsuario}`)
      .then((response) => {
        console.log("User deleted successfully");
        this.fetchUser();
      })
      .catch((error) => {
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

  handleActive = (idUsuario) => {
    const token = sessionStorage.getItem("token");

    // Agregar el token al encabezado de la solicitud Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .patch(`https://${miVariableGlobal}:7106/api/usuario/${idUsuario}/4`)
      .then((response) => {
        console.log("User deleted successfully");
        this.fetchUser();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { user, idRol } = this.state;

    return (
      <div className="m-4">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1.5rem",
          }}
        >
          <button
            className={`btn rounded-pill ${
              idRol === 1 ? "btn-primary" : "btn-secondary"
            }`}
            style={{
              color: "white",
              fontSize: "20px",
              width: "45%",
              background: "var(--LightGreen)",
              borderColor: "var(--LightGreen)",
            }}
            type="button"
            onClick={this.handleSetActive}
            disabled={idRol === 1}
          >
            ACTIVO
          </button>
          <button
            className={`btn rounded-pill ${
              idRol === 2 ? "btn-primary" : "btn-secondary"
            }`}
            style={{
              color: "white",
              fontSize: "20px",
              width: "45%",
              background: "var(--Gray)",
              borderColor: "var(--Gray)",
            }}
            type="button"
            onClick={this.handleSetInactive}
            disabled={idRol === 2}
          >
            INACTIVO
          </button>
        </div>

        <Col style={{ margin: "2rem 0.7rem" }}>
          {user.map((item) => (
            <Card key={item.idUsuario} style={{ margin: "1rem 0.7rem" }}>
              <Row>
                <Col xs={7} style={{ padding: "0.75rem", textAlign: "start" }}>
                  <Card.Title
                    className="p-2"
                    style={{ color: "var(--LightGreen)" }}
                  >
                    {item.email}
                  </Card.Title>
                  <Card.Subtitle className="text-muted p-2">
                    {item.nombre} ({item.rol.nombre})
                  </Card.Subtitle>
                </Col>
                <Col xs={3} style={{ alignSelf: "center" }}>
                  <Row>
                    <FaTrash
                      onClick={() => this.handleDeleteUser(item.idUsuario)}
                      style={{ fontSize: "30px", color: "red" }}
                    />
                  </Row>
                </Col>
                <Col xs={2} style={{ alignSelf: "center", margin: "auto" }}>
                  {item.idRol !== 5 ? (
                    <Link
                      to={`/userForm/${item.idUsuario}`}
                      style={{ color: "black" }}
                      className="me-2"
                    >
                      {" "}
                      <FaAngleRight style={{ fontSize: "30px" }} />{" "}
                    </Link>
                  ) : (
                    <FaCheck
                      onClick={() => this.handleActive(item.idUsuario)}
                      style={{ fontSize: "30px", color: "green" }}
                    />
                  )}
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </div>
    );
  }
}
