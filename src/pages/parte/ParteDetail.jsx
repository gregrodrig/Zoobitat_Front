import ParteDetailComponent from "components/Parte/ParteDetailComponent";
import Encabezado from "components/header/Encabezado";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import log from "loglevel";
import axios from "axios";
import miVariableGlobal from "../../global.js";

export const ParteDetail = () => {
  let { id } = useParams();

  useEffect(() => {
    log.info(`Cargando detalle de parte con ID: ${id}`);
    sendLogToServer(`Cargando detalle de parte con ID: ${id}`);
  }, [id]);

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
        section: "ParteDetail",
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

  return (
    <div>
      <Encabezado titulo={"PARTE REGISTRADO"} />
      <ParteDetailComponent idParte={id} />
    </div>
  );
};
