import React from 'react'
import PropTypes from 'prop-types'

const ClimaDays = ({resultado}) => {

    const { daily } = resultado

    console.log(daily);

     let menor = daily[0].temp.day

     //console.log(menor);
     let newIndex = 0 

     if(daily !== undefined){
          daily.map((element, index) => {

               if(menor > element.temp.day){
              
                    menor = element.temp.day 
                    newIndex = index
                 } 

                 return 0
          })          
     } 

     console.log(menor, newIndex);

    
         
         
     
    
    
    
    //console.log(menor, newIndex);
    


    
    
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


    <div className='flex justify-between align-top lg:flex-row  sm:flex-col'>

         
         

        <div className='sm:pt-5 md:pt-2 lg:pt-1'>            
             <p className='pt-5 lg:text-3xl md:text-5xl sm:text-4xl pl-10'>Temp: { parseFloat(daily[1].temp.day - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Max: { parseFloat(daily[1].temp.max - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Min: { parseFloat(daily[1].temp.min - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10 sm:underline lg:no-underline'>{timeConverter(daily[1].dt)}</p>
        </div>  

        <div className='sm:pt-5 md:pt-2 lg:pt-1'>        
             <p className='pt-5 lg:text-3xl md:text-5xl sm:text-4xl pl-10'>Temp: { parseFloat(daily[2].temp.day - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Max: { parseFloat(daily[2].temp.max - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Min: { parseFloat(daily[2].temp.min - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10 sm:underline lg:no-underline'>{timeConverter(daily[2].dt)}</p>
        </div>    

        <div className='sm:pt-5 md:pt-2 lg:pt-1'>      
             <p className='pt-5 lg:text-3xl md:text-5xl sm:text-4xl pl-10'>Temp: { parseFloat(daily[3].temp.day - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Max: { parseFloat(daily[3].temp.max - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Min: { parseFloat(daily[3].temp.min - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10 sm:underline lg:no-underline'>{timeConverter(daily[3].dt)}</p>
        </div>  

        <div className='sm:pt-5 md:pt-2 lg:pt-1'>          
             <p className='pt-5 lg:text-3xl md:text-5xl sm:text-4xl pl-10'>Temp: { parseFloat(daily[4].temp.day - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Max: { parseFloat(daily[4].temp.max - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Min: { parseFloat(daily[4].temp.min - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10 sm:underline lg:no-underline'>{timeConverter(daily[4].dt)}</p>
        </div>  

        <div className='sm:pt-5 md:pt-2 lg:pt-1'>   
             <p className='pt-5 lg:text-3xl md:text-5xl sm:text-4xl pl-10'>Temp: { parseFloat(daily[5].temp.day - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Max: { parseFloat(daily[5].temp.max - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Min: { parseFloat(daily[5].temp.min - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10 sm:underline lg:no-underline'>{timeConverter(daily[5].dt)}</p>
        </div>  

        <div className='sm:pt-5 md:pt-2 lg:pt-1'>            
             <p className='pt-5 lg:text-3xl md:text-5xl sm:text-4xl pl-10'>Temp: { parseFloat(daily[6].temp.day - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Max: { parseFloat(daily[6].temp.max - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Min: { parseFloat(daily[6].temp.min - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10 sm:underline lg:no-underline'>{timeConverter(daily[6].dt)}</p>
        </div> 

        <div className='sm:pt-5 md:pt-2 lg:pt-1'>         
             <p className='pt-5 lg:text-3xl md:text-5xl sm:text-4xl pl-10'>Temp: { parseFloat(daily[7].temp.day - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Max: { parseFloat(daily[7].temp.max - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10'>Min: { parseFloat(daily[7].temp.min - kelvin).toFixed(2) }&#x2103;</p> 
             <p className='pt-5 lg:text-2xl md:text-4xl sm:text-3xl pl-10 sm:underline lg:no-underline'>{timeConverter(daily[7].dt)}</p>
        </div> 
    </div>
  )
}

ClimaDays.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default ClimaDays
