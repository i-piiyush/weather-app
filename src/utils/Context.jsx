import React, { createContext, useState } from 'react'


export const userContext = createContext();

const Context = (props) => {
    const [city,setcity] = useState("")
    const [weatherData,setWeatherData] = useState([])
    const [nextWeather,setNextWeather] = useState([])
    
  return (
    <userContext.Provider value={[{city,setcity},{weatherData,setWeatherData},{nextWeather,setNextWeather}]}>
        { props.children}
    </userContext.Provider>
   
  )
}

export default Context