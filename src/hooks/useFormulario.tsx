import { useState } from "react"
import { formulario } from '../interfaces/formulario';
import { Formulario } from "../components/Formulario";

export const useFormulario = <formulario extends Object>(formulario: formulario) => {

    const [formu, setState] = useState(formulario)

    const onChange = (value:string, campo: keyof formulario) => {
        setState({
             ...formu,
            [campo]:value

        })
    }
  return {
    formu,
    onChange
    
  }
}
