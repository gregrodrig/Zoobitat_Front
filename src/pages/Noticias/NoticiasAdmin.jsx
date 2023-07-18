import axios from "axios";
import HabitatsListsComponent from "components/HabitatsList/HabitatsListsComponent";
import NoticiasListAdmin from "components/Noticia/NoticiasListAdmin";
import Encabezado from "components/header/Encabezado";
import miVariableGlobal from "global";
import { log } from "loglevel";
import React, { useEffect } from "react";

export const NoticiasAdmin = () => {
  useEffect(() => {
    //log.info('Página Noticias  admin')
    sendLogToServer("Página Noticias  admin");
  }, []);

  function sendLogToServer(logMessage) {
    const token = sessionStorage.getItem("token");
    var headr = null;

    const config = {
      message: logMessage,
      level: "INFO",
      section: "Hbitatlist",
      IdUsuario: 4,
      Usuario: null,
    };

    // Verificar si el token existe en la sesión y agregarlo a la configuración
    if (sessionStorage.getItem("token")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("token")}`;
    }

    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, config)
      .then((response) => {
        console.log("Log enviado al servidor");
      })
      .catch((error) => {
        console.error("Error al enviar el log al servidor", error);
      });
  }

  return (
    <div>
      <Encabezado titulo={"LISTADO DE NOTICIAS"} />
      <NoticiasListAdmin />
    </div>
  );
};
