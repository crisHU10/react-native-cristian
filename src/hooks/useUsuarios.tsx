import { useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios =  (pagina: number) => {
    debugger
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

 

  const cargarUsuarios = async() => {
    const resp = await reqResApi.get<ReqResListado>('/users',{ params:{
         page: pagina
        }
    })

    if(resp.data.data.length>0){
        setUsuarios(resp.data.data);
        pagina +=1;
    }
    else{
        alert ('No hay mas registros');
    }
    
    }

   
    
    return {
        usuarios,
        cargarUsuarios
    
    }
}
