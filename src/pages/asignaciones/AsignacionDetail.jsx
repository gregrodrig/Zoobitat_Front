import AsignacionDetailComponent from 'components/Asignacion/AsignacionDetailComponent'
import Encabezado from 'components/header/Encabezado'
import React from 'react'
import { useParams } from 'react-router-dom';

export const AsignacionDetail = () => {
  let { id } = useParams();
    return (
        <div>
            <Encabezado titulo={"TAREAS"} />
             
            <AsignacionDetailComponent idasignacion={id}  />
          </div>
  )
}
