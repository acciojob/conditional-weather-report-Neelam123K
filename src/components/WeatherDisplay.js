import React from "react";
 
const WeatherDisplay=({weather})=>{
 
const {temperature, conditions} = weather;
 
return(
    <div>
        <p>Temperature: <span style={{color:temperature>20?"red" :"blue"}}>{temperature}</span></p>
        <p>Conditions: {conditions}</p>
    </div>
)
};
 
export default WeatherDisplay;