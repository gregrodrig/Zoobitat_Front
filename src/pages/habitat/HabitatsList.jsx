import HabitatsListsComponent from 'components/HabitatsList/HabitatsListsComponent'
import Encabezado from 'components/header/Encabezado'
import React, { useEffect } from 'react'
import log from 'loglevel'
import axios from 'axios'

export const HabitatsList = () => {
  useEffect(() => {
    log.info('Página HabitatsList visitada')
    sendLogToServer('Página HabitatsList visitada')
  }, [])

  function sendLogToServer(logMessage) {
    axios
      .post('https://localhost:7106/api/logs', {
        message: logMessage,
        level: 'INFO',
        section: 'HabitatsList',
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
      <Encabezado titulo={'LISTADO DE HABITATS'} />
      <HabitatsListsComponent />
    </div>
  )
}
