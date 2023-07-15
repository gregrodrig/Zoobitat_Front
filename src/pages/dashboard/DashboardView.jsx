import Dashboard from "components/dashboard/Dashboard";
import React, { useEffect } from "react";
import log from 'loglevel';
import axios from 'axios';

export default function DashboardView() {
  useEffect(() => {
    log.info('Página DashboardView visitada');
    sendLogToServer('Página DashboardView visitada');
  }, []);

  function sendLogToServer(logMessage) {
    axios
      .post(`https://${global}:7106/api/logs`, {
        message: logMessage,
        level: 'INFO',
        section: 'DashboardView',
      })
      .then((response) => {
        console.log('Log enviado al servidor');
      })
      .catch((error) => {
        console.error('Error al enviar el log al servidor', error);
      });
  }

  return <Dashboard />;
}
