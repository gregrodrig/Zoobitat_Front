import ParteDetailComponent from 'components/Parte/ParteDetailComponent';
import ParteListComponent from 'components/Parte/ParteListComponent';
import Encabezado from 'components/header/Encabezado';
import React, { useEffect } from 'react';
import log from 'loglevel';
import axios from 'axios';
import miVariableGlobal from '../../global.js';

export const ParteList = () => {
  useEffect(() => {
    log.info('Página ParteList visitada');
    sendLogToServer('Página ParteList visitada');
  }, []);

  function sendLogToServer(logMessage) {
    if (sessionStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    }
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: logMessage,
        level: 'INFO',
        section: 'ParteList',
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
      <Encabezado titulo={'LISTADO DE REGISTRO DE PARTES'} />
      <ParteListComponent />
    </div>
  );
};
