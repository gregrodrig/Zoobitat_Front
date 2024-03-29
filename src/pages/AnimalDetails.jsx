import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import log from "loglevel";
import axios from "axios";
import "./AnimalDetails.css";
import miVariableGlobal from "../global.js";

function AnimalDetails() {
  const { idAnimal } = useParams();

  const [animal, setAnimal] = useState(null);
  const [galeria, setGaleria] = useState(null);

  useEffect(() => {
    log.info(`Detalles del animal con ID: ${idAnimal}`);
    sendLogToServer(`Detalles del animal con ID: ${idAnimal}`);

    fetch(`${miVariableGlobal}especie/${idAnimal}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data);
      })
      .catch((error) => {
        if (sessionStorage.getItem("token")) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${sessionStorage.getItem("token")}`;
        }
        axios
          .post(`${miVariableGlobal}logs`, {
            message: error,
            level: "ERROR",
            section: "AnimalDetails",
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
  }, [idAnimal]);

  useEffect(() => {
    fetch(`${miVariableGlobal}galeria/idespecie/${idAnimal}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGaleria(data);
      })
      .catch((error) => {
        if (sessionStorage.getItem("token")) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${sessionStorage.getItem("token")}`;
        }
        axios
          .post(`${miVariableGlobal}logs`, {
            message: error,
            level: "ERROR",
            section: "AnimalDetails",
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
  }, [idAnimal]);

  function sendLogToServer(logMessage) {
    if (sessionStorage.getItem("token")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("token")}`;
    }
    axios
      .post(`${miVariableGlobal}logs`, {
        message: logMessage,
        level: "INFO",
        section: "AnimalDetails",
        IdUsuario: 4,
        Usuario: null,
      })
      .then((response) => {
        console.log("Log enviado al servidor");
      })
      .catch((error) => {
        if (sessionStorage.getItem("token")) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${sessionStorage.getItem("token")}`;
        }
        axios
          .post(`${miVariableGlobal}logs`, {
            message: error,
            level: "ERROR",
            section: "AnimalDetails",
            IdUsuario: 4,
            Usuario: null,
          })
          .then((response) => {
            console.log("Log enviado al servidor");
          })
          .catch((error) => {
            console.error("Error al enviar el log al servidor", error);
          });
        console.error("Error al enviar el log al servidor", error);
      });
  }

  if (!animal || !galeria) {
    return <div>Cargando...</div>;
  }

  return (
    <body>
      <header className="AD-header">
        {/* una map para sacar la background image */}

        <div className="animal-header" key={animal.idEspecie}>
          <div className="header-container">
            <div className="header-image">
              <img
                src={animal.icono}
                alt="back-image"
                style={{ height: "210px" }}
              />
            </div>
          </div>
        </div>
      </header>
      {/* una map para sacar el titulo , la descripcion y la image */}
      <div className="animals">
        <div className="animal-details">
          <h2 className="animal" style={{ fontWeight: "bold" }}>
            {animal.name}
          </h2>
          <p className="especie">
            <DiCssdeck style={{ marginRight: "5px", color: "#C0D904" }} />
            {`${animal.nombre} - `}
            <FaMapMarkerAlt style={{ marginRight: "5px", color: "#C0D904" }} />
          </p>
          <h5>Descripción</h5>
          <p
            style={{
              textAlign: "start",
              marginLeft: "20px",
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            {animal.informacion}
          </p>
          <h5>Galería de Imágenes</h5>
          {galeria.map((image) => (
            <img
              key={image.IdGaleria}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "20px",
                marginRight: "8px",
                marginTop: "10px",
              }}
              src={image.imagen}
              alt="animal-image"
            />
          ))}
        </div>
      </div>
    </body>
  );
}

export default AnimalDetails;
