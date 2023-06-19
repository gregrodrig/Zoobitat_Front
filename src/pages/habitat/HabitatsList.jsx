import HabitatsListsComponent from 'components/HabitatsList/HabitatsListsComponent'
import Encabezado from 'components/header/Encabezado'
import React from 'react'

export const HabitatsList = () => {
  return (
    <div>
         <Encabezado titulo={"LISTADO DE HABITATS"} />
        <HabitatsListsComponent/>
    </div>
  )
}
