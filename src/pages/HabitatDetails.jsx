import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HabitatDetails.css";
import axios from "axios";
import miVariableGlobal from '../global.js';


function HabitatDetails() {

    const { idhabitat } = useParams();
    const [habitat, setHabitat] = useState({});

    useEffect(() => {
        axios.get(`https://${miVariableGlobal}:7106/api/habitat/${idhabitat}`)
            .then(response => {
                setHabitat(response.data);
            })
            .catch(error => {
                if (sessionStorage.getItem('token')) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
                  }


                axios
        .post(`https://${miVariableGlobal}:7106/api/logs`, {
          message: error,
          level: 'ERROR',
          section: 'HabitatDetails',
          IdUsuario: 4,
          Usuario: null
        })
        .then((response) => {
          console.log('Log enviado al servidor')
        })
        .catch((error) => {
          console.error('Error al enviar el log al servidor', error)
        })
                console.error(error);
            });
    }, [idhabitat]);

    return (
        <div>
            <header className='AD-header'>
                <div className='animal-header' key={habitat.idHabitat}>
                    <div className='header-container'>
                        <div className='header-image'>
                            <img src={habitat.imagen} alt='back-img' style={{ height: '210px' }} />
                        </div>
                    </div>
                </div>
            </header>
            <div className='habitats'>
                <div className='habitat-details'>
                    <h2 className='habitat' style={{ fontWeight: 'bold' }}>{habitat.nombre}</h2>
                    <hr style={{ margin: "10px ", borderWidth: "2px", width: "80%", marginLeft: '36px', color: 'black' }} />
                    <p style={{ textAlign: 'start', marginLeft: '20px', fontSize: '12px', width: '100%', marginTop: '20px' }}>{habitat.descripcion}</p>
                </div>
            </div>
        </div>
    )
}


export default HabitatDetails;
