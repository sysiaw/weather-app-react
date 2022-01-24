import React, { useState } from "react";

import Today from "./Today";
import Forecast from "./Forecast";

import "./Body.css";

import axios from "axios";

export default function Body(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 10) / 10,
      timezone: response.data.timezone * 1000,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "238de8ebfdbed23208cdb21bb0ba9714";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Body">
        <div className="Search">
          <div className="row">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  id="home-button"
                >
                  Home
                </button>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="search-bar"
                  placeholder="Enter a city"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-primary mb-3"
                  id="search-button"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-12">
            <div className="Heading">
              <h1>
                <span id="city-name">{weatherData.city}</span>,{" "}
                <span id="country-code">{weatherData.country}</span>
              </h1>
            </div>
          </div>
          <div className="col-4">
            <Today data={weatherData} />
          </div>
          <div className="col-4">
            <Forecast coords={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
