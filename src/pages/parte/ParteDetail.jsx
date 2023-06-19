import ParteDetailComponent from 'components/Parte/ParteDetailComponent';
import Encabezado from 'components/header/Encabezado';
import React from 'react'
import { useParams } from 'react-router-dom';

export const ParteDetail = () => {
    let { id } = useParams();
  return (
    <div>
        <Encabezado titulo={"PARTE REGISTRADO"} />
        <ParteDetailComponent idParte={id}/>
    </div>
  )
}
