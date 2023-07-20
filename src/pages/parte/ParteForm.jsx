import ParteFormComponent from "components/Parte/ParteFormComponent";
import Encabezado from "components/header/Encabezado";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import log from "loglevel";
import axios from "axios";
import miVariableGlobal from "../../global.js";

export const ParteForm = () => {
  let { id } = useParams();

  useEffect(() => {
    log.info("Abriendo formulario de registro de partes");
    sendLogToServer("Abriendo formulario de registro de partes");
  }, []);

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
        section: "ParteForm",
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
      <Encabezado titulo={"REGISTRO DE PARTES"} />
      <ParteFormComponent idParte={id} />
    </div>
  );
};
