import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import miVariableGlobal from "../../global.js";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa";
import { Empty } from "components/emptyMsg/Empty.jsx";

export default class ActividadesListAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actividades: [], // Array para almacenar las noticias recibidas
      loading: true, // Estado de carga inicialmente activado
    };
  }

  componentDidMount() {
    // Realizar la solicitud GET a la API
    axios
      .get(`https://${miVariableGlobal}:7106/api/Actividades`)
      .then((response) => {
        // Actualizar el estado con las noticias recibidas y desactivar la carga
        this.setState({ actividades: response.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
        if (sessionStorage.getItem("token")) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${sessionStorage.getItem("token")}`;
        }

        axios
          .post(`https://${miVariableGlobal}:7106/api/logs`, {
            message: error.message,
            level: "ERROR",
            section: "ActividadesListAdmin",
            IdUsuario: 4,
            Usuario: null,
          })
          .then((response) => {
            console.log("Log enviado al servidor");
          })
          .catch((error) => {
            console.error("Error al enviar el log al servidor", error);
          });
        // Manejar el error y desactivar la carga en caso de fallo
        this.setState({ loading: false });
      });
  }

  render() {
    const { actividades, loading } = this.state;
    function formatDate(dateTimeString) {
      const dateObject = new Date(dateTimeString);
      const formattedDate = dateObject.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      return formattedDate;
    }
    return (
      <>
        <div style={{ width: "100%", margin: "1.5rem" }}>
          <Link
            style={{ width: "80%", backgroundColor: "#2a411c" }}
            to="/ActividadesForm"
            className="btn rounded-pill btn-block"
          >
            <span style={{ color: "white", fontSize: "30px" }}>
              Añadir Nueva actividad
            </span>
          </Link>
        </div>
        {loading ? (
          <Container>
            <Empty msg="msgCargandoDatos" />
          </Container>
        ) : (
          actividades.map((act) => (
            <Container className="card mb-3" style={{ borderColor: "#c0d904" }}>
              <Row className="row">
                <Col xs={3}>
                  <img
                    src={act.foto}
                    alt="Avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "50%", height: "auto" }}
                  />
                </Col>
                <Col xs={7}>
                  <h5 className="card-title" style={{ color: "green" }}>
                    {act.Id}
                  </h5>
                  <p className="card-text text-muted">{act.titulo}</p>
                  <p className="card-text text-muted">
                    {formatDate(act.fecha)}
                  </p>
                </Col>
                <Col xs={2} style={{ alignSelf: "center" }}>
                  <Link
                    to={`/ActividadesForm/${act.id}`}
                    style={{ color: "black" }}
                    className="me-2"
                  >
                    <FaAngleRight style={{ fontSize: "30px" }} />
                  </Link>
                </Col>
              </Row>
            </Container>
          ))
        )}
      </>
    );
  }
}
