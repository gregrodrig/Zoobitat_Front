import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import { AnimalCard } from "../animalCard/AnimalCard";

function Home() {
  return (
  <div className="App">
<header className="App-header">
  <h1 className="Header-title">
   Bienvenidos  <br />a <Link to="/">ZOOBITAT</Link>
  </h1>
  <p id="Header-description">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt et
    voluptatibus, incidunt facere quibusdam enim?
  </p>
  <AnimalCard animal={undefined} />
</header>
</div>
  )
}

export default Home
 