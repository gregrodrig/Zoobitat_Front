import axios from "axios";
import ActividadesListAdmin from "components/actividades/ActividadesListAdmin";
import Encabezado from "components/header/Encabezado";
import miVariableGlobal from "global";
import React, { useEffect } from "react";

export const ActividadesAdmin = () => {
  useEffect(() => {
    sendLogToServer("Página Actividades admin");
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
      .post(`${miVariableGlobal}logs`, config)
      .then((response) => {
        console.log("Log enviado al servidor");
      })
      .catch((error) => {
        console.error("Error al enviar el log al servidor", error);
      });
  }

  return (
    <div>
      <Encabezado titulo={"LISTADO DE ACTIVIDADES"} />
      <ActividadesListAdmin />
    </div>
  );
};
