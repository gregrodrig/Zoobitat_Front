
import AnimalForm from 'components/AnimalForm/AnimalForm';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import log from 'loglevel';
import axios from 'axios';


export const AnimalFormPage = () => {
  let { id } = useParams();


  useEffect(() => {
    log.info(`Página AnimalFormPage visitada. ID de animal: ${id}`);
    sendLogToServer(`Página AnimalFormPage visitada. ID de animal: ${id}`);
  }, [id]);

  function sendLogToServer(logMessage) {
    axios.post(`https://${global}:7106/api/logs`, { message: logMessage, level: 'INFO', section: 'AnimalFormPage' })
      .then(response => {
        console.log('Log enviado al servidor');
      })
      .catch(error => {
        console.error('Error al enviar el log al servidor', error);
      });
  }

  return (
    <div>
      <AnimalForm idAnimal={id} />
    </div>
  );

};
