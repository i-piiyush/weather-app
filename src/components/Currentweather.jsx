import React, { useContext, useEffect } from "react";
import { userContext } from "../utils/Context";
import Nextweather from "./Nextweather";

const Currentweather = () => {
  const [userCity, weatherDetails] = useContext(userContext);

  // useEffect(()=>{

  //   if(weatherDetails && weatherDetails.weatherData.name){
  //     console.log(weatherDetails.weatherData.name)
  //   }

  // },[weatherDetails])

  return (
    <div className="flex justify-center items-center">
      <div className="w-[90vw] h-[40vh] bg-[#088F8F] rounded-3xl flex flex-col justify-center px-10">
        <h1 className="text-white text-[64px] font-bold">
          {weatherDetails.weatherData.sys
            ? `${ weatherDetails.weatherData.name }, ${weatherDetails.weatherData.sys.country}`
            : "Loading Data..."}
        </h1>

        <div className="flex gap-5 text-[20px] font-semibold text-white my-3">
          <h1>  {weatherDetails.weatherData.main
            ? `Tempreture: ${Math.ceil(weatherDetails.weatherData.main.temp - 273.15 ) } °C`
            : ""}</h1>
          <h1>{weatherDetails.weatherData.main
            ? `Feels like: ${Math.ceil(weatherDetails.weatherData.main.feels_like - 273.15 ) } °C`
            : ""}</h1>
          <h1>{weatherDetails.weatherData.main
            ? `Humidity: ${weatherDetails.weatherData.main.humidity } %`
            : ""}</h1>
        </div>

        <div className="flex gap-5 text-[20px] font-semibold text-white">
          <h1>{weatherDetails.weatherData.wind
            ? `Wind speed: ${weatherDetails.weatherData.wind.speed } KpH, ${weatherDetails.weatherData.wind.deg}°`
            : ""}</h1>
          
        </div>

        
      </div>

    </div>
  );
};

export default Currentweather;
