import Encabezado from 'components/header/Encabezado'
import UsuarioListComponent from 'components/usuarios/UsuarioListComponent'
import React from 'react'

export const UserList = () => {
  return (
    <div>
        <Encabezado titulo={"LISTADO DE USUARIO"} />
         
        <UsuarioListComponent  />
      </div>
  )
}
