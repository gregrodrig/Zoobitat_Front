
import AnimalListDash from 'components/animalsListDash/AnimalListDash';
import Encabezado from 'components/header/Encabezado';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import log from 'loglevel';
import axios from 'axios';
import miVariableGlobal from '../../global.js';



export const AnimalListPage = () => {
  useEffect(() => {
    log.info('Página AnimalListPage visitada');
    sendLogToServer('Página AnimalListPage visitada');
  }, []);

  function sendLogToServer(logMessage) {
    if (sessionStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    }
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: logMessage,
        level: 'INFO',
        section: 'AnimalListPage',
        IdUsuario: 4,
        Usuario: null
      })
      .then((response) => {
        console.log('Log enviado al servidor');
      })
      .catch((error) => {
        console.error('Error al enviar el log al servidor', error);
      });
  }

  return (
    <div>
      <Encabezado titulo={'LISTADO DE ANIMALES'} />

      <AnimalListDash />
    </div>
  );
};
