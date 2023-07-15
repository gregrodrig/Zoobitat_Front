import ParteFormComponent from 'components/Parte/ParteFormComponent';
import Encabezado from 'components/header/Encabezado';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import log from 'loglevel';
import axios from 'axios';

export const ParteForm = () => {
  let { id } = useParams();

  useEffect(() => {
    log.info('Abriendo formulario de registro de partes');
    sendLogToServer('Abriendo formulario de registro de partes');
  }, []);

  function sendLogToServer(logMessage) {
    axios
      .post(`https://${global}:7106/api/logs`, {
        message: logMessage,
        level: 'INFO',
        section: 'ParteForm',
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
      <Encabezado titulo={'REGISTRO DE PARTES'} />
      <ParteFormComponent idParte={id} />
    </div>
  );
};
