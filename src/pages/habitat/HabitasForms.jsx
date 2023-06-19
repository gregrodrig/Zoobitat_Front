import HabitatsFormComponent from 'components/HabitatForm/HabitatsFormComponent'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import log from 'loglevel'
import axios from 'axios'

export const HabitasForms = () => {
  let { id } = useParams()

  useEffect(() => {
    log.info(`Cargando formulario de hábitat con ID: ${id}`)
    sendLogToServer(`Cargando formulario de hábitat con ID: ${id}`)
  }, [id])

  function sendLogToServer(logMessage) {
    axios
      .post('https://localhost:7106/api/logs', {
        message: logMessage,
        level: 'INFO',
        section: 'HabitasForms',
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
      <HabitatsFormComponent idHabitat={id} />
    </div>
  )
}
