import React from 'react'
import './NoticiasDetails.css'

function NoticiasDetails() {
    const Noticia = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada bibendum lorem, eget ornare velit tincidunt a. Quisque quis ex mattis, porttitor massa quis, elementum lacus. Nam id vestibulum nisl. Duis id massa vel velit congue molestie non lobortis risus. Sed vel vestibulum neque. Nullam auctor congue orci in vehicula.
      
      Quisque blandit elementum magna, vel dictum lectus rutrum a. Ut dictum id ipsum non laoreet. Quisque tempor nibh ac ipsum iaculis porta. Nam luctus dignissim ante. Praesent non lectus sodales, dapibus enim eget, vulputate ligula. Phasellus pretium sem posuere leo dictum, sed rhoncus quam sagittis. Phasellus at nulla libero. Cras eget aliquet augue, sit amet ullamcorper leo. Sed eget placerat lorem orci in vehicula.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada bibendum lorem, eget ornare velit tincidunt a. Quisque quis ex mattis, porttitor massa quis, elementum lacus. Nam id vestibulum nisl. Duis id massa vel velit congue molestie non lobortis risus. Sed vel vestibulum neque. Nullam auctor congue orci in vehicula.
      
      Quisque blandit elementum magna, vel dictum lectus rutrum a. Ut dictum id ipsum non laoreet. Quisque tempor nibh ac ipsum iaculis porta. Nam luctus dignissim ante. Praesent non lectus sodales, dapibus enim eget, vulputate ligula. Phasellus pretium sem posuere leo dictum, sed rhoncus quam sagittis. Phasellus at nulla libero. Cras eget aliquet augue, sit amet ullamcorper leo. Sed eget placerat lorem orci in vehicula.`,
          images: "/assets/parrots_Color.jpg"
        }
      ];
  return (
    <header className='noticia-header'>
    {/* una map para sacar la background image */}
    {Noticia.map((news) => (
  <div className='noticia-header' key={news.id}>
    <div className='noticia-container'>
      <div className='header-image'>
        <img src={news.images} alt='back-image'  style={{height:'220px' , borderBottomRightRadius:'30px' , borderBottomLeftRadius:'30px'}} />
      </div>
      <h3> {news.title}</h3>

      <p style={{marginTop:'60px'}}> {news.text}</p>
    </div>

  </div>
))}
  </header>
  )
}

export default NoticiasDetails