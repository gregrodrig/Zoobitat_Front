import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import miVariableGlobal from "../../global.js";
import axios from "axios";
import "../../index.css";
import { GrMapLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { Empty } from "components/emptyMsg/Empty.jsx";

export default class NoticiasListAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticia: [], // Array para almacenar las noticias recibidas
      loading: true, // Estado de carga inicialmente activado
    };
  }

  componentDidMount() {
    // Realizar la solicitud GET a la API
    axios
      .get(`${miVariableGlobal}Noticia`)
      .then((response) => {
        // Actualizar el estado con las noticias recibidas y desactivar la carga
        this.setState({ noticia: response.data, loading: false });
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
            message: error.message,
            level: "ERROR",
            section: "NoticiasListAdmin",
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
    const { noticia, loading } = this.state;
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
        <div style={{ margin: "1.5rem" }}>
          <Link
            style={{ width: "80%", backgroundColor: "var(--DarkGreen)" }}
            to="/NoticiasForm"
            className="btn rounded-pill btn-block"
          >
            <span style={{ color: "white", fontSize: "30px" }}>
              Añadir Nueva Noticia
            </span>
          </Link>
        </div>
        <br />
        {loading ? (
          <Col style={{ margin: "2rem" }}>
            <Empty msg="msgCargandoDatos" />
          </Col>
        ) : (
          noticia.map((act, index) => (
            <Card
              key={index}
              className="mb-3"
              style={{ borderColor: "var(--LightGreen)", margin: "0 3rem" }}
            >
              <Row>
                <Col xs={3} style={{ margin: "auto" }}>
                  <Card.Img
                    src={act.imagen}
                    alt="Avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "50%", height: "auto" }}
                  />
                </Col>
                <Col
                  xs={7}
                  style={{
                    textAlign: "start",
                    margin: "auto",
                    padding: "0.75rem",
                  }}
                >
                  <Card.Title className="mb-3">{act.titulo}</Card.Title>
                  <Card.Subtitle className="text-muted mb-2">
                    {formatDate(act.fecha)}
                  </Card.Subtitle>
                </Col>
                <Col xs={2} style={{ alignSelf: "center" }}>
                  <Link
                    to={`/NoticiasForm/${act.idNotica}`}
                    style={{ color: "black" }}
                    className="me-2"
                  >
                    <FaAngleRight style={{ fontSize: "30px" }} />
                  </Link>
                </Col>
              </Row>
            </Card>
          ))
        )}
      </>
    );
  }
}
