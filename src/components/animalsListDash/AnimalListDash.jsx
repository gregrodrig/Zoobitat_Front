import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

export default class AnimalListDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
    };
  }

  componentDidMount() {
    this.fetchAnimals();
  }

  fetchAnimals = () => {
    axios
      .get("https://localhost:7106/api/animal")
      .then((response) => {
        this.setState({ animals: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handleDeleteAnimal = (idAnimal) => {
    axios
      .post(`https://localhost:7106/api/animal/${idAnimal}`)
      .then((response) => {
        console.log("Animal deleted successfully");
        this.fetchAnimals();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { animals } = this.state;

    return (
      <div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Link
            style={{ width: "90%", backgroundColor: "#2a411c" }}
            to="/AnimalForm"
            className="btn rounded-pill btn-block"
          >
            <span style={{ color: "white", fontSize: "30px" }}>
              Añadir Nuevo Animal
            </span>
          </Link>
        </div>

        <br />

        <div className="Col" style={{ margin: "10px" }}>
          {animals.map((item) => (
            <div className="card">
              <div className="row">
                <Col xs={3}>
                  <img
                    src={item.imagen}
                    alt="Avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "50%", height: "auto" }}
                  />
                </Col>
                <Col xs={7}>
                  <h5 className="card-title" style={{ color: "green" }}>
                    {item.idAnimal}
                  </h5>
                  <p className="card-text text-muted">{item.nombre}</p>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
