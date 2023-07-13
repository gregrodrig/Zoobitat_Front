import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import { AnimalCard } from "../animalCard/AnimalCard";
import NoticiasList from 'components/Noticia/NoticiasList';
import "../../index.css"

function Home() {
  return (
  <div className="App">
<header className="App-header">
<h1
          className="Header-title"
          style={{
            fontSize: '3rem',
            marginBottom:'-0px'
          }}
        >
          Bienvenidos a ZOOBITAT
        </h1>
  <p id="Header-description">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt et
    voluptatibus, incidunt facere quibusdam enim?
  </p>
  <AnimalCard animal={undefined} />


  <h1 style={{ marginTop:'70px', color: 'var(--MediumGreen)',  '@media (max-width: 1024px)': {
              fontSize: '1.5rem', 
            },  }}>ATICULOS FORMATIVOS</h1>
  <div style={{width:"95%" , margin:"5px"}}>
    <NoticiasList/>
  </div>
  
</header>
</div>
  )
}

export default Home
 