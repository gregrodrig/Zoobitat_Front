import Encabezado from 'components/header/Encabezado';
import UsuarioListComponent from 'components/usuarios/UsuarioListComponent';
import React, { useEffect } from 'react';
import log from 'loglevel';
import axios from 'axios';
import miVariableGlobal from '../../global.js';

export const UserList = () => {
  useEffect(() => {
    log.info('Página UserList visitada');
    sendLogToServer('Página UserList visitada');
  }, []);

  function sendLogToServer(logMessage) {
    axios
      .post(`https://${miVariableGlobal}:7106/api/logs`, {
        message: logMessage,
        level: 'INFO',
        section: 'UserList',
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
      <Encabezado titulo={'LISTADO DE USUARIO'} />
      <UsuarioListComponent />
    </div>
  );
};
