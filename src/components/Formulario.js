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
      <div className='pt-10'>
            <label htmlFor="ciudad" 
            className="ml-px pl-4 block font-medium text-white tracking-tight text-2xl sm:text-3xl lg:text-4xl ">
                Ciudad:
            </label>
            <div className="mt-1 opacity-75 pt-10">
                <input 
                    type="text" 
                    name="ciudad" 
                    id="ciudad" 
                    value={ciudad}
                    onChange={handleChange}
                    className="shadow-none  focus:ring-indigo-500 focus:border-indigo-500 block sm:text-xl text-black font-normal  border-gray-300 px-4 rounded-full w-1/2 h-10" 
                    placeholder="Ciudad" />
            </div>
            
            <div className='pt-10 pl-10'>
                <button 
                type="submit" 
                value='Buscar Clima'
                className="inline-flex items-center px-5 py-1 border border-gray-300 shadow-sm tracking-tight text-1xl  sm:text-1xl lg:text-2xl font-medium rounded-md text-black bg-stone-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 opacity-90"
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
