import ParteDetailComponent from 'components/Parte/ParteDetailComponent'
import ParteListComponent from 'components/Parte/ParteListComponent'
import Encabezado from 'components/header/Encabezado'
import React from 'react'

export const ParteList = () => {
  return (
    <div>
          <Encabezado titulo={"LISTADO DE REGISTRO DE PARTES"} />
          <ParteListComponent/>
    </div>
  )
}
