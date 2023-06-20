import React, { Component } from 'react';
import axios from 'axios';
import NoticiaCard from './NoticiaCard';

export default class NoticiasList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      noticias: [], // Array para almacenar las noticias recibidas
      loading: true, // Estado de carga inicialmente activado
    };
  }

  componentDidMount() {
    // Realizar la solicitud GET a la API
    axios
      .get('https://localhost:7106/api/noticia')
      .then(response => {
        // Actualizar el estado con las noticias recibidas y desactivar la carga
        this.setState({ noticias: response.data, loading: false });
      })
      .catch(error => {
        console.error(error);




        axios
        .post('https://localhost:7106/api/logs', {
          message: error,
          level: 'ERROR',
          section: 'NoticiasList',
        })
        .then((response) => {
          console.log('Log enviado al servidor')
        })
        .catch((error) => {
          console.error('Error al enviar el log al servidor', error)
        })
        // Manejar el error y desactivar la carga en caso de fallo
        this.setState({ loading: false });
      });
  }






  render() {
    const { noticias, loading } = this.state;
    console.log(noticias);

    return (
      <div style={{ overflowY: 'scroll', height: '400px' }}>
        {loading ? (
          <p>Cargando noticias...</p>
        ) : (
          noticias.map(noticia => (
            <NoticiaCard 
              key={noticia.idNotica}
              id={noticia.idNotica}
              imagen={noticia.imagen}
              titulo={noticia.titulo}
              texto={noticia.cuerpo}
            />
          ))
        )}
      </div>
    );
  }
}
