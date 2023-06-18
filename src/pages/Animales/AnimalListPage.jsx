import AnimalListDash from 'components/animalsListDash/AnimalListDash';
import Encabezado from 'components/header/Encabezado';
import React from 'react'
import { useParams } from 'react-router-dom';

export const AnimalListPage = () => {
   
    return (
      <div>
        <Encabezado titulo={"LISTADO DE ANIMALES"} />
         
         <AnimalListDash  />
      </div>
    );
}
