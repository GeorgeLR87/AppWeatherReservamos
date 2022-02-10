import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {    

    const [error, guardarError] = useState(false)    
    const { ciudad } = busqueda
    
    const handleChange = e => {        
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(ciudad.trim() === '') {
            guardarError(true)
            return
        }

        guardarError(false)
        guardarConsultar(true)
    }


  return (
    <form
        onSubmit={handleSubmit}
    >
        {error ? <Error mensaje='Campo Obligatorio' /> : null}
      <div>
            <label htmlFor="ciudad" className="ml-px pl-4 block text-lg font-medium text-white">Ciudad:</label>
            <div className="mt-1 opacity-75">
                <input 
                    type="text" 
                    name="ciudad" 
                    id="ciudad" 
                    value={ciudad}
                    onChange={handleChange}
                    className="shadow-none  focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl text-black font-normal  border-gray-300 px-4 rounded-full" 
                    placeholder="Ciudad" />
            </div>
            <br></br>
            <div>
                <button 
                type="submit" 
                value='Buscar Clima'
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Buscar Clima
                </button>
                
            </div>
        </div>
    </form>
  )
}
Formulario.propTypes = {
    busqueda : PropTypes.object.isRequired,
    guardarBusqueda : PropTypes.func.isRequired,
    guardarConsultar : PropTypes.func.isRequired
}

export default Formulario
