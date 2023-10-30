interface Persona{
    Nombre: string,
    direccion: string
}


export const ObjetosLiterales = () => {

    const Persona: Persona = {
        Nombre: 'Cristian',
        direccion: 'Calle reyes'
    }
  return (
    <>
        <h3>ObjetosLiterales</h3>
        <code>
            <pre>
            { JSON.stringify(Persona, null,2)}
            </pre>
        </code>
    </>
  )
}
