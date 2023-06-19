import AsignacionFormComponent from 'components/Asignacion/AsignacionFormComponent'
import Encabezado from 'components/header/Encabezado'
import React, { useEffect } from 'react'
import log from 'loglevel'
import axios from 'axios'

export const AsignacionForm = () => {
  useEffect(() => {
    log.info('Página AsignacionForm visitada')
    sendLogToServer('Página AsignacionForm visitada')
  }, [])

  function sendLogToServer(logMessage) {
    axios
      .post('https://localhost:7106/api/logs', {
        message: logMessage,
        level: 'INFO',
        section: 'AsignacionForm',
      })
      .then((response) => {
        console.log('Log enviado al servidor')
      })
      .catch((error) => {
        console.error('Error al enviar el log al servidor', error)
      })
  }

  return (
    <div>
      <Encabezado titulo={'ASIGNAR TAREAS'} />
      <AsignacionFormComponent />
    </div>
  )
}
