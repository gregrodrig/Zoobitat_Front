import AsignacionFormComponent from 'components/Asignacion/AsignacionFormComponent'
import Encabezado from 'components/header/Encabezado'
import React from 'react'

export const AsignacionForm = () => {
    return (
        <div>
            
            <Encabezado titulo={"ASIGNAR TAREAS"} />
            <AsignacionFormComponent  />
          </div>
      )
}
