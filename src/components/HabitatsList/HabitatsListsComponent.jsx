import axios from "axios";
import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import miVariableGlobal from '../../global.js';

export default class HabitatsListsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitats: [],
    };
  }

  componentDidMount() {
    this.fetchHabitats();
  }

  fetchHabitats = () => {
    axios
      .get(`https://${miVariableGlobal}:7106/api/habitat`)
      .then((response) => {
        this.setState({ habitats: response.data });
      },)

      .catch((error) => {

        console.error(error);
        if (sessionStorage.getItem('token')) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
        }

        axios
        .post(`https://${miVariableGlobal}:7106/api/logs`, {
          message: error.message,
          level: 'ERROR',
          section: 'HabitatsListsComponent',
          IdUsuario: 4,
          Usuario: null
        }
        )
        .then((response) => {
          console.log('Log enviado al servidor')
        })
        .catch((error) => {
          console.error('Error al enviar el log al servidor', error)
        })



      });
  };

  render() {
    const { habitats } = this.state;

    return (
      <div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Link
            style={{ width: "90%", backgroundColor: "#2a411c" }}
            to="/habitatForm"
            className="btn rounded-pill btn-block"
          >
            <span style={{ color: "white", fontSize: "30px" }}>
              Añadir Nuevo Habitat
            </span>
          </Link>
        </div>

        <br />

        <div className="Col" style={{ margin: "10px" }}>
          {habitats.map((item) => (
            <div className="card mb-2">
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
                    to={`/habitatForm/${item.idHabitat}`}
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
