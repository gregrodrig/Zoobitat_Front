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

  function  sendLogToServer(logMessage) {
    
    const token = sessionStorage.getItem('token');
    var headr=null;
   
    const config = {
      message: logMessage,
      level: 'INFO',
      section: 'AnimalListView',
      IdUsuario: 4,
      Usuario: null,
    };
  
    // Verificar si el token existe en la sesión y agregarlo a la configuración
    if (sessionStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    }
  
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, config)
      .then((response) => {
        console.log('Log enviado al servidor');
      })
      .catch((error) => {
        console.error('Error al enviar el log al servidor', error);
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
