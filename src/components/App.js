
import React, {useState, useEffect} from "react";
import WeatherDisplay from './WeatherDisplay';
import './../styles/App.css';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: ""});

  useEffect (() => {
    const weatherInput = { temperature: 25, conditions: "Sunny"};
    setWeather(weatherInput);
  },[])

  return (
    <div id="main">
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />

        {/* Do not remove the main div */}


    </div>
  )
}

export default App
