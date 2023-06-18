import AnimalForm from 'components/AnimalForm/AnimalForm';
import React from 'react'
import { useParams } from 'react-router-dom';

export const AnimalFormPage = () => {
    let { id } = useParams();

    if(id){

      return (
        <div>
           
           <AnimalForm idanimal={id} />
        </div>
      );
    }
    return (
      <div>
        
         <AnimalForm  />
      </div>
    );
}
