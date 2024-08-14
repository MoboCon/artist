import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div className="weather-widget">
      {weather ? (
        <div>
          <h3>{weather.name}</h3>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
