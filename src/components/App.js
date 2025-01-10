describe("testing conditional weather report", () => {
  const baseURL = "http://localhost:8080";

  beforeEach(() => {
    cy.visit(baseURL); // Visit the app before each test
  });

  it("testing tags", () => {
    cy.get('p').should('have.length', 2); // Ensure there are two <p> tags
    cy.get('span').should('have.length', 1); // Ensure there is one <span> tag
  });

  it("testing temperature and color", () => {
    const red = 'rgb(255, 0, 0)'; // Expected color for temperature > 20
    cy.get('p').first().should('have.text', 'Temperature: 25'); // Check temperature
    cy.get('span').should('have.css', 'color', red); // Check if color is red
    cy.get('p').last().should('have.text', 'Conditions: Sunny'); // Check conditions
  });
});



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
