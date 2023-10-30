import React, { useState } from 'react'

export const Formulario = () => {

    const [formulario, setformulario] = useState({
        email: 'test@test.cl',
        pasword: '123'
    })

  return (
    <>
    <h3>Formularios</h3>
    <input type="text"
           className='form-control'
           placeholder='Email'
           value={formulario.email}
    
    />
        <input type="text"
           className='form-control mt-2 mb-2'
           placeholder='Password'
           value={formulario.pasword}
    
    />
    </>
  )
}