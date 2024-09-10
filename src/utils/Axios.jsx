import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { userContext } from './Context'


const Axios = () => {
    const [userCity,weatherDetails,nextWeather] = useContext(userContext)
    const apiKey = 'yourapikey'
    const [Lat, setLat] = useState(undefined)
    const [Lon, setLon] = useState(undefined)
    

const sevenDays = async () =>{
    try {
      const val = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&cnt=5&appid=${apiKey}`)
      nextWeather.setNextWeather(val.data)
      console.log(val.data)
    } catch (error) {
        console.log(error)
    }
}

    const getCity = async () =>{
        try {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${userCity.city}&limit=1&appid=${apiKey}`)
            setLon(response.data[0].lon)
            setLat(response.data[0].lat)

        } catch (error) {
            console.error(`error: ${error.message}`)
        }
    }

    useEffect(() => {
        if (userCity.city) {
            getCity();
        }
    }, [userCity.city]);
    const getUserLocation = async () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( (position)=> {
                setLat(position.coords.latitude)
                setLon(position.coords.longitude)
            },
            (error)=>{
                console.log(error.message)
            })
        }
    }
   useEffect(()=>{
    getUserLocation()
   },[])
useEffect(()=>{
    
    if(Lat != undefined && Lon != undefined){
        weatherData()
        sevenDays()
        console.log(`Lat: ${Lat}, Lon: ${Lon}`);
    }
},[Lat,Lon])



    const weatherData = async() => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=${apiKey}`)

            weatherDetails.setWeatherData(response.data)
            

        } catch (error) {
            console.error(`The error was: ${error.message}`)
        }
       
    }

  
  return (
    <div>
     
       
    </div>
  )
}

export default Axios