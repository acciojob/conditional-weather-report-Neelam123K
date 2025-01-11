import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
 
const App = () => {
 
const [weather,setWeather] = useState({temperature: 0, conditions: "" });
 
useEffect(()=>{
   const newData = {temperature: 25, conditions: "Sunny" };
   setWeather(newData);
},[])
 
  return (
    <div>
        <h1>Weather Condition and Temperature</h1>
        <WeatherDisplay weather={weather} />
    </div>
  )
}
 
export default App;