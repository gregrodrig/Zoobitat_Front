import React, { useEffect } from "react";
import "./AnimalListView.css";
import Search from "components/search/Search";
import AnimalList from "components/animalList/AnimalList";
import log from "loglevel";
import axios from "axios";
import miVariableGlobal from '../../global.js';

function AnimalListView() {
  useEffect(() => {
    log.info("Página AnimalListView visitada");
    sendLogToServer("Página AnimalListView visitada");
  }, []);

  function sendLogToServer(logMessage) {
    axios
      .post('https://'+miVariableGlobal+':7106/api/logs', {
        message: logMessage,
        level: "INFO",
        section: "AnimalListView",
      })
      .then((response) => {
        console.log("Log enviado al servidor");
      })
      .catch((error) => {
        console.error("Error al enviar el log al servidor", error);
      });
  }

  return (
    <>
      <Search />
      <AnimalList />
    </>
  );
}

export default AnimalListView;
