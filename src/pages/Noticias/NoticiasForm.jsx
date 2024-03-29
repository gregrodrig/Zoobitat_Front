import axios from "axios";
import HabitatsFormComponent from "components/HabitatForm/HabitatsFormComponent";
import NoticiasFormComponent from "components/Noticia/NoticiasFormComponent";
import Encabezado from "components/header/Encabezado";
import miVariableGlobal from "global";
import { log } from "loglevel";
import React, { useEffect } from "react";
import { useParams } from "react-router";

export const NoticiasForm = () => {
  let { id } = useParams();

  useEffect(() => {
    //log.info(`Cargando formulario de Noticias con ID: ${id}`)
    sendLogToServer(`Cargando formulario de Noticias con ID: ${id}`);
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
        section: "HabitasForms",
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
      <Encabezado titulo={"FORMULARIO DE NOTICIAS"} />
      <NoticiasFormComponent id={id} />
    </div>
  );
};
