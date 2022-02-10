import React from 'react'
import PropTypes from 'prop-types'

const Clima = ({resultado, resultadoLatLon}) => {

    const { current, daily } = resultado

    const [{ display }] = resultadoLatLon
    
    
    if(!current) return null
    if(!display) return null

    function timeConverter(UNIX_timestamp){
        const a = new Date(UNIX_timestamp * 1000);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate(); 
        
        const time = `${date} ${month} ${year}`
        return time;
      }

    const kelvin = 273.15

  return (
    <div>
        <div className='sm:flex sm:flex-col md:flex lg:grid'>
             <h2 className=' sm:text-5xl md:text-6xl lg:text-6xl pt-6 pl-10'>{display}</h2>   
             <p className='pt-5 sm:text-4xl md:text-5xl lg:text-5xl pl-10'>{ parseFloat(current.temp - kelvin).toFixed(2) }  &#x2103;</p>
             <p className='pt-5 sm:text-3xl md:text-3xl lg:text-3xl pl-10'>Max: { parseFloat(daily[0].temp.max - kelvin).toFixed(2) }  &#x2103;</p>
             <p className='pt-5 sm:text-3xl md:text-3xl lg:text-3xl pl-10'>Min: { parseFloat(daily[0].temp.min - kelvin).toFixed(2) }  &#x2103;</p>
             <p className='pt-5 sm:text-3xl md:text-3xl lg:text-3xl pl-10'>{timeConverter(current.dt)}</p>

        </div>      
    </div>
  )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired,
    resultadoLatLon: PropTypes.array.isRequired
}

export default Clima
