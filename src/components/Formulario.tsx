import { useFormulario } from '../hooks/useFormulario';

export const Formulario = () => {


    const {formu,onChange} = useFormulario({
      email:'test',
      password:'21312312'
    });

  return (
    <>
    <h3>Formularios</h3>
    <input type="text"
           className='form-control'
           placeholder='Email'
           value={formu.email}
           onChange={({target})=>onChange(target.value,'email')}
    
    />
        <input type="text"
           className='form-control mt-2 mb-a2'
           placeholder='Password'
           value={formu.password}
           onChange={({target})=>onChange(target.value,'password')}

    
    />
    <code>
        <pre>
            {JSON.stringify(formu,null,2)}
        </pre>
    </code>
    </>
  )
}