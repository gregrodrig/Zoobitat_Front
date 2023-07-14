import AsignacionDetailComponent from 'components/Asignacion/AsignacionDetailComponent'
import Encabezado from 'components/header/Encabezado'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import log from 'loglevel'
import axios from 'axios'
import miVariableGlobal from '../../global.js';

export const AsignacionDetail = () => {
  let { id } = useParams()

  useEffect(() => {
    log.info(`Cargando detalles de la asignación con ID: ${id}`)
    sendLogToServer(`Cargando detalles de la asignación con ID: ${id}`)
  }, [id])

  function sendLogToServer(logMessage) {
    axios
      .post('https://'+miVariableGlobal+':7106/api/logs', {
        message: logMessage,
        level: 'INFO',
        section: 'AsignacionDetail',
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
      <Encabezado titulo={'TAREAS'} />
      <AsignacionDetailComponent idasignacion={id} />
    </div>
  )
}
