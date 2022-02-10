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
        <div>
             <h2>El clima de {display} es:</h2>   
             <p>{ parseFloat(current.temp - kelvin).toFixed(2) }</p> <span>&#x2103;</span>
             <p>Max: { parseFloat(daily[0].temp.max - kelvin).toFixed(2) }</p><span>&#x2103;</span>
             <p>Min: { parseFloat(daily[0].temp.min - kelvin).toFixed(2) }</p><span>&#x2103;</span>
             <p>{timeConverter(current.dt)}</p>

        </div>      
    </div>
  )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired,
    resultadoLatLon: PropTypes.array.isRequired
}

export default Clima
