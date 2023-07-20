import AsignacionListComponent from "components/Asignacion/AsignacionListComponent";
import Encabezado from "components/header/Encabezado";
import React, { useEffect } from "react";
import log from "loglevel";
import axios from "axios";
import miVariableGlobal from "../../global.js";

export const AsignacionList = () => {
  useEffect(() => {
    log.info("Página AsignacionList visitada");
    sendLogToServer("Página AsignacionList visitada");
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
        section: "AsignacionList",
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
      <Encabezado titulo={"TAREAS"} />
      <AsignacionListComponent />
    </div>
  );
};
