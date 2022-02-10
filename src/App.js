import React, { Fragment, useState, useEffect } from "react";
import BackGround from "./img/background.jpg";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import ClimaDays from "./components/ClimaDays";
import Error from "./components/Error";

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: ''
  })

  const [consultar, guardarConsultar] = useState(false)
  const [resultado,guardarResultado] = useState({})
  const [resultadoLatLon,guardarResultadoTitulo] = useState([{}])
  const [error, guardarError] = useState(false)

  const { ciudad } = busqueda

  useEffect(() => {

    const consultarAPI = async () => {

      if(consultar) {
        const urlLatLon = `https://search.reservamos.mx/api/v2/places?q=${ciudad}`


       const respuestaLatLon = await fetch(urlLatLon)
       const resultadoLatLon = await respuestaLatLon.json()

       const [{ display, lat, long }] = resultadoLatLon

       const ciudadBuscada = ciudad.toLocaleLowerCase()
       const displayEncontrado = display.toLocaleLowerCase()

       if(ciudadBuscada === displayEncontrado) {
         
        const appId = '8049668aa41a57e732bc44a1f99c5c99'
       const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${appId}`

       const respuesta = await fetch(url)
       const resultado = await respuesta.json()
     
       guardarResultado(resultado)
       guardarResultadoTitulo(resultadoLatLon)
       guardarConsultar(false)
       guardarError(false)
       } else {
         guardarError(true)
         guardarConsultar(false)
       }      
    }       

  }
     consultarAPI()  
  }, [consultar])

  let componente;
  let componente2
  if(error) {
    componente = <Error mensaje='No hay resultados'/>
  } else {
    componente = <Clima 
                  resultado={resultado}     
                  resultadoLatLon={resultadoLatLon}           
                />
    componente2=<ClimaDays 
                  resultado={resultado}  
                />
    }

  return (
    <Fragment>
      <main>
        <div className="h-48 max-h-full hover:max-h-screen">
          <div className="absolute inset-0">
            <img
              className="h-full w-full opacity-100 object-cover"
              src={BackGround}
              alt="People working on laptops"
            />
          </div>

          <div>
            <Header/>

          </div>

          <div className="relative grid grid-cols-12 pt-10 ">
            
            <div className="col-start-2 col-end-6  h-96  text-white">
              <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
               />
            </div>

            <div className=" col-start-8 col-end-12 text-white">
              {componente}
            </div>

            <div className="col-start-2 col-end-12 h-7 pt-10  text-white">
              {componente2}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
