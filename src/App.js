import React, { useEffect, useState } from "react";
import './app.css';
const Weather = () => {

  const [weather, setweather] = useState([]);

  const weatherdetaile = async () => {
    const response = await fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d7d3cdff170c18fa7d1e61983b5d2d3d");
    const data = await response.json();
    setweather(data);
  }

  useEffect(() => {
    weatherdetaile();
  }, []);

  return (
    <div>
      {weather.map(item => (
        <li key={item.id}>{item.weather}</li>
      ))}
      <h1>weather-app</h1><br></br>
      <input type="text" placeholder="Enter city name" /><br></br>
      <p>hyderabad</p><br></br>
      <p> Temparatur:35celsius</p><br></br>
      <p>min:30C</p><br></br>
      <p>max:33C</p><br></br>
      <p>Humidity:20%</p>

    </div>
  )
}
export default Weather;


// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d7d3cdff170c18fa7d1e61983b5d2d3d
