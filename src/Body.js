import React, { useState } from "react";

import Forecast from "./Forecast";

import "./Body.css";

import axios from "axios";
import image from "./cloudy.png";

export default function Body(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 10) / 10,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Body">
        <div className="Search">
          <div className="row">
            <form className="row g-3">
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
            <div className="Today">
              <h2>Today</h2>
              <div className="content">
                <span id="date">
                  <h4>3 Dec 2021 (Fri)</h4>
                  <h4>07:13 a.m.</h4>
                </span>
                <h4>
                  <span id="weather-description">
                    {weatherData.description}
                  </span>
                </h4>
                <img src={image} alt={weatherData.description} />
                <h3>
                  <span id="temperature-today">
                    {Math.round(weatherData.temperature)}
                  </span>{" "}
                  °C
                </h3>
                <p>
                  Max:{" "}
                  <span id="max-temp-today">{Math.round(weatherData.max)}</span>
                  °
                  <br />
                  Min:{" "}
                  <span id="min-temp-today">{Math.round(weatherData.min)}</span>
                  °
                  <br />
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  <br />
                  Wind: <span id="wind-speed">{weatherData.wind}</span> m/s
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <Forecast />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fd6d027787299da7fc57a8ab3840d713";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
