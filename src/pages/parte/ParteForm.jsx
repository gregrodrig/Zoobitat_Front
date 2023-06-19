import ParteFormComponent from 'components/Parte/ParteFormComponent'
import Encabezado from 'components/header/Encabezado';
import React from 'react'
import { useParams } from 'react-router-dom';

export const ParteForm = () => {
    let { id } = useParams();
  return (
    <div>
        <Encabezado titulo={"REGISTRO DE PARTES"} />
        <ParteFormComponent idParte={id}/>
    </div>
  )
}
