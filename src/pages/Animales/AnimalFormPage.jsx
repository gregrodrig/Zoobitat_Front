import AnimalForm from 'components/AnimalForm/AnimalForm';
import React from 'react'
import { useParams } from 'react-router-dom';

export const AnimalFormPage = () => {
    let { id } = useParams();

    


      return (
        <div>
           
           <AnimalForm idAnimal={id} />
        </div>
      );
   
}
