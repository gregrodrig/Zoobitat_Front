import axios from 'axios'
import HabitatsFormComponent from 'components/HabitatForm/HabitatsFormComponent'
import ActividadesFormAdmin from 'components/actividades/ActividadesFormAdmin'
import Encabezado from 'components/header/Encabezado'
import miVariableGlobal from 'global'
import { log } from 'loglevel'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export const ActividadesForm = () => {
    let { id } = useParams()

    useEffect(() => {
      //log.info(`Cargando formulario de Actividades con ID: ${id}`)
      sendLogToServer(`Cargando formulario de Actividades con ID: ${id}`)
    }, [id])
  
    function sendLogToServer(logMessage) {
      if (sessionStorage.getItem('token')) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
      }
      axios
        .post(`https://${miVariableGlobal}:7106/api/logs`, {
          message: logMessage,
          level: 'INFO',
          section: 'HabitasForms',
          IdUsuario: 4,
            Usuario: null
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
         <Encabezado titulo={'FORMULARIO DE ACTIVIDADES'} />
        <ActividadesFormAdmin id={id} />
      </div>
    )
}
