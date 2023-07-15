import Mapa from "components/mapa/Mapa";
import React, { useEffect } from "react";
import log from "loglevel";
import axios from "axios";
import miVariableGlobal from '../../global.js';


export default function MapaView() {
  useEffect(() => {
    log.info("Página MapaView visitada");
    sendLogToServer("Página MapaView visitada");
  }, []);

  function sendLogToServer(logMessage) {
    if (sessionStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    }
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: logMessage,
        level: "INFO",
        section: "MapaView",
        IdUsuario: 4,
          Usuario: null
      })
      .then((response) => {
        console.log("Log enviado al servidor");
      })
      .catch((error) => {
        console.error("Error al enviar el log al servidor", error);
      });
  }

  return <Mapa />;
}
