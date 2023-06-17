import React, { Component } from 'react'

export default class Encabezado extends Component {
  render() {
    const { titulo, info } = this.props;

    if(info==null){

      return (
        <div>
           <header className='contacto-header'>
          <h1 className='contacto-title'>{titulo}</h1>
        </header>
        <br/>
        </div>
       
      );


    }else{

      return (
            <div>
              <header className='contacto-header'>
              <h1 className='contacto-title'>{titulo}</h1>
              <p className='contacto-description'>{info}</p>
            </header>
            <br/>
            </div>
          
          );

    }
   
  }
}
