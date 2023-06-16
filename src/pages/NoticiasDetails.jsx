import React, { useEffect, useState } from 'react'
import './NoticiasDetails.css'
import { useParams } from 'react-router';

function NoticiasDetails() {

  const { idnoticia } = useParams();

 
  const [Noticia, setNoticia] = useState(null);
  
  useEffect(() => {
    fetch(`https://localhost:7106/api/Noticia/${idnoticia}`)
      .then(response => response.json())
      .then(data => {
        
        setNoticia(data);
        console.log(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [idnoticia]);

  
if(!Noticia){return <div>no existe esta noticia</div>}

  return (
    <header className='noticia-header'>
      <div className='noticia-header' key={Noticia.idNotica}>
        <div className='noticia-container'>
          <div className='header-image'>
            <img src={Noticia.imagen} alt='back-image'  style={{height:'220px' , borderBottomRightRadius:'30px' , borderBottomLeftRadius:'30px'}} />
          </div>
          <h3> {Noticia.titulo}</h3>
          <p style={{marginTop:'60px'}}> {Noticia.cuerpo}</p>
        </div>
      </div>

  </header>
  )
}

export default NoticiasDetails