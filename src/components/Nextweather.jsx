import React, { useContext, useEffect } from "react";
import { userContext } from "../utils/Context";

const Nextweather = () => {
  const [userCity,weatherDetails,nextWeather] = useContext(userContext)

 
  const fiveWeather = nextWeather?.nextWeather?.list || [];
  
  return (
    <div className="flex justify-center items-center gap-5 my-10">
      
      {
        fiveWeather.map((weather, index) => (
          <div key={index} className="h-[330px] w-[300px] rounded-3xl border-[#088F8F]/[.7] border bg-transparent wcard flex flex-col justify-center px-5 gap-3">
        <h1 className="text-xl text-white font-bold">{
            `${fiveWeather[index].weather[0].description}`
           }</h1>
        <div className="w-full h-[50%] flex justify-center items-center ">
          <img
            src={`https://openweathermap.org/img/wn/${fiveWeather[index].weather[0].icon}@2x.png`}
            alt="img"
            className="h-[90%]"
          />
        </div>
        <div className="flex text-white text-sm gap-3">
          <h1 className="font-semibold">{`Temp ${Math.ceil(fiveWeather[index].main.temp - 273.15)}°C`}</h1>
        <h1 className="font-semibold">{`Humidity ${Math.ceil(fiveWeather[index].main.humidity)}%`}</h1>
          <h1 className="font-semibold">{`Max temp ${Math.ceil(fiveWeather[index].main.temp_max - 273.15)}°C`}</h1>
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default Nextweather;
