import React, { useEffect, useState } from "react";
import "./NoticiasDetails.css";
import { useParams } from "react-router";
import log from "loglevel";
import axios from "axios";
import miVariableGlobal from "../global.js";

function NoticiasDetails() {
  const { idnoticia } = useParams();
  const [Noticia, setNoticia] = useState(null);

  useEffect(() => {
    log.info(`Cargando detalles de la noticia con ID: ${idnoticia}`);
    sendLogToServer(`Cargando detalles de la noticia con ID: ${idnoticia}`);

    fetch(`${miVariableGlobal}Noticia/${idnoticia}`)
      .then((response) => response.json())
      .then((data) => {
        setNoticia(data);
        console.log(data);
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
            section: "NoticiasDetails",
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
  }, [idnoticia]);

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
        section: "NoticiasDetails",
        IdUsuario: 4,
        Usuario: null,
      })
      .then((response) => {
        console.log("Log enviado al servidor");
      })
      .catch((error) => {
        console.error("Error al enviar el log al servidor", error);
      });
  }

  if (!Noticia) {
    return <div>no existe esta noticia</div>;
  }

  return (
    <>
      <header className="noticia-header">
        <div className="noticia-header" key={Noticia.idNotica}>
          <div className="noticia-container">
            <div className="header-image">
              <img
                src={Noticia.imagen}
                alt={Noticia.imagen}
                style={{
                  width: "100%",
                  height: "60vh",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <div className="noticia">
        <h2 className="habitat" style={{ fontWeight: "bold" }}>
          {" "}
          {Noticia.titulo}
        </h2>
        <hr
          style={{
            margin: "10px ",
            borderWidth: "2px",
            width: "80%",
            marginLeft: "36px",
            color: "black",
          }}
        />
        <p
          style={{
            textAlign: "start",
            marginLeft: "20px",
            fontSize: "12px",
            width: "100%",
            marginTop: "20px",
          }}
        >
          {Noticia.cuerpo}
        </p>
      </div>
    </>
  );
}

export default NoticiasDetails;
