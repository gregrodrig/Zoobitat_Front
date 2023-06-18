
import AsignacionListComponent from 'components/Asignacion/AsignacionListComponent'
import Encabezado from 'components/header/Encabezado'
import React from 'react'

export const AsignacionList = () => {
  return (
    <div>
        <Encabezado titulo={"TAREAS"} />
            <AsignacionListComponent  />
    </div>
  )
}
