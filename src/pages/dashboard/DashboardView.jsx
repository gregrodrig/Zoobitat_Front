import Dashboard from "components/dashboard/Dashboard";
import React, { useEffect } from "react";
import log from "loglevel";
import axios from "axios";
import miVariableGlobal from "../../global.js";

export default function DashboardView() {
  useEffect(() => {
    log.info("Página DashboardView visitada");
    sendLogToServer("Página DashboardView visitada");
  }, []);

  function sendLogToServer(logMessage) {
    if (sessionStorage.getItem("token")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("token")}`;
    }
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: logMessage,
        level: "INFO",
        section: "DashboardView",
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

  return <Dashboard />;
}
