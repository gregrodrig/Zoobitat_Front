import axios from "axios";
import ActividadesFormAdmin from "components/actividades/ActividadesFormAdmin";
import Encabezado from "components/header/Encabezado";
import miVariableGlobal from "global";
import React, { useEffect } from "react";
import { useParams } from "react-router";

export const ActividadesForm = () => {
  let { id } = useParams();

  useEffect(() => {
    sendLogToServer(`Cargando formulario de Actividades con ID: ${id}`);
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
      <Encabezado titulo={"FORMULARIO DE ACTIVIDADES"} />
      <ActividadesFormAdmin id={id} />
    </div>
  );
};
