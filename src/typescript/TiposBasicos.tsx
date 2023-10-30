
export const TiposBasicos = () => {

  let nombre: string | number =  'Cristian' 
  const estaActivo: boolean = true;
  const poderes: string[]= ['volar', 'nada'];
  return (
    <>
        <h3>
        TiposBasicos
        </h3>   
        {nombre},  {(estaActivo)? 'activo': 'no activo'}
        <br/>  
        {poderes.join(',')}
    </>  
  )
}
