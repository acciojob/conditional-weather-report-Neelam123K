import React from "react";
const WeatherDisplay = ({ Weather }) => {
  const { temperature, condition } = Weather;

  const tempStyle = {
    color: temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>temperature: <span style={tempStyle}>{temperature}</span></p>
      <p>Condition: {condition}</p>
    </div>
  )
}

export default WeatherDisplay;