import HabitatsFormComponent from 'components/HabitatForm/HabitatsFormComponent'
import React from 'react'
import { useParams } from 'react-router-dom';

export const HabitasForms = () => {
  let { id } = useParams();
  return (
    <div>
        <HabitatsFormComponent idHabitat={id}/>
    </div>
  )
}
