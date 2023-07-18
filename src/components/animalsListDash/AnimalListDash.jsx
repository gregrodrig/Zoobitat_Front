import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import miVariableGlobal from "../../global.js";
import { Empty } from "components/emptyMsg/Empty.jsx";

export default class AnimalListDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAnimals();
  }

  fetchAnimals = () => {
    axios
      .get(`https://${miVariableGlobal}:7106/api/animal`)
      .then((response) => {
        this.setState({ animals: response.data, loading: false });
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
            section: "AnimalListDash",
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
        this.setState({ loading: false });
      });
  };
  handleDeleteAnimal = (idAnimal) => {
    axios
      .post(`https://${miVariableGlobal}:7106/api/animal/${idAnimal}`)
      .then((response) => {
        console.log("Animal deleted successfully");
        this.fetchAnimals();
      })
      .catch((error) => {
        console.error(error);
      });
    this.setState({ loading: false });
  };

  render() {
    const { animals, loading } = this.state;

    return (
      <>
        <div>
          <div style={{ margin: "1.5rem" }}>
            <Link
              style={{ width: "80%", backgroundColor: "var(--DarkGreen)" }}
              to="/AnimalForm"
              className="btn rounded-pill btn-block"
            >
              <span style={{ color: "white", fontSize: "30px" }}>
                Añadir Nuevo Animal
              </span>
            </Link>
          </div>
          <br />
          {loading ? (
            <Col style={{ margin: "2rem" }}>
              <Empty msg="msgCargandoDatos" />
            </Col>
          ) : (
            <>
              {animals.map((item, index) => (
                <Card
                  key={index}
                  className="mb-3"
                  style={{ borderColor: "var(--LightGreen)", margin: "0 3rem" }}
                >
                  <Row>
                    <Col xs={3} style={{ margin: "auto" }}>
                      <Card.Img
                        src={item.imagen}
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
                      <Card.Title className="mb-3">{item.nombre}</Card.Title>
                    </Col>
                    <Col xs={2} style={{ alignSelf: "center" }}>
                      <Link
                        to={`/AnimalForm/${item.idAnimal}`}
                        style={{ color: "black" }}
                        className="me-2"
                      >
                        <FaAngleRight style={{ fontSize: "30px" }} />
                      </Link>
                    </Col>
                  </Row>
                </Card>
              ))}
            </>
          )}
        </div>
      </>
    );
  }
}
