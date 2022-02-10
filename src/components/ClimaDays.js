import React from 'react'
import PropTypes from 'prop-types'

const ClimaDays = ({resultado}) => {
    const { daily } = resultado
    
    
    if(!daily) return null

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
    <div className='flex justify-between align-top'>

        <div className=''>            
             <p>Temp: { parseFloat(daily[1].temp.day - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Max: { parseFloat(daily[1].temp.max - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Min: { parseFloat(daily[1].temp.min - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>{timeConverter(daily[1].dt)}</p>
        </div>  

        <div>        
             <p>Temp: { parseFloat(daily[2].temp.day - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Max: { parseFloat(daily[2].temp.max - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Min: { parseFloat(daily[2].temp.min - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>{timeConverter(daily[2].dt)}</p>
        </div>    

        <div>      
             <p>Temp: { parseFloat(daily[3].temp.day - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Max: { parseFloat(daily[3].temp.max - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Min: { parseFloat(daily[3].temp.min - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>{timeConverter(daily[3].dt)}</p>
        </div>  

        <div>          
             <p>Temp: { parseFloat(daily[4].temp.day - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Max: { parseFloat(daily[4].temp.max - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Min: { parseFloat(daily[4].temp.min - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>{timeConverter(daily[4].dt)}</p>
        </div>  

        <div>   
             <p>Temp: { parseFloat(daily[5].temp.day - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Max: { parseFloat(daily[5].temp.max - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Min: { parseFloat(daily[5].temp.min - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>{timeConverter(daily[5].dt)}</p>
        </div>  

        <div>            
             <p>Temp: { parseFloat(daily[6].temp.day - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Max: { parseFloat(daily[6].temp.max - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Min: { parseFloat(daily[6].temp.min - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>{timeConverter(daily[6].dt)}</p>
        </div> 

        <div>         
             <p>Temp: { parseFloat(daily[7].temp.day - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Max: { parseFloat(daily[7].temp.max - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>Min: { parseFloat(daily[7].temp.min - kelvin).toFixed(2) }</p> <span> &#x2103; </span>
             <p>{timeConverter(daily[7].dt)}</p>
        </div> 
    </div>
  )
}

ClimaDays.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default ClimaDays
