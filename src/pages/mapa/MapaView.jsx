import Mapa from "components/mapa/Mapa";
import React, { useEffect } from "react";
import log from "loglevel";
import axios from "axios";

export default function MapaView() {
  useEffect(() => {
    log.info("Página MapaView visitada");
    sendLogToServer("Página MapaView visitada");
  }, []);

  function sendLogToServer(logMessage) {
    axios
      .post("https://localhost:7106/api/logs", {
        message: logMessage,
        level: "INFO",
        section: "MapaView",
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
