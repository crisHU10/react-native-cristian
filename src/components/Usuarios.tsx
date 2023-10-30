import { useEffect, useRef, useState } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {


   const {usuarios,cargarUsuarios} = useUsuarios(1);


  const renderItem = ({first_name, last_name, email, avatar,id}: Usuario) =>{

    return(
        <tr key={id}>
                        <td>
                        <img src={avatar} alt={first_name} style={{
                            width: 35,
                            borderRadius: 100
                        }} />
                        </td>
                        <td>
                       {first_name } { last_name}
                        </td>
                        <td>
                        {email}
                        </td>  
        </tr>
    )
  }
  
  return (
    <>
     <h3>Usuarios</h3>
     <table className="table">
            <thead>
                    <tr>
                        <th>
                        Avatar
                        </th>
                        <th>
                        Nombre
                        </th>
                        <th>
                        Email
                        </th>  
                    </tr>
            
            </thead>
            <tbody>
                {
                    usuarios.map(renderItem)
                }

            </tbody>
     </table>
     <button className='btn btn-primary'
             onClick= {listarUsuarios()}>
        Siguientes
     </button>
    </>
    
  )
}