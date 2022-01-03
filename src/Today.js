import React from "react";

import "./Today.css";

import image from "./cloudy.png";

export default function Today() {
  return (
    <div className="Today">
      <h2>Today</h2>
      <div className="content">
        <span id="date">
          <h4>3 Dec 2021 (Fri)</h4>
          <h4>07:13 a.m.</h4>
        </span>
        <h4>
          <span id="weather-description">Overcast clouds</span>
        </h4>
        <img src={image} alt="cloudy" />
        <h3>
          <span id="temperature-today">1</span> °C
        </h3>
        <p>
          Max: <span id="max-temp-today">3</span>°
          <br />
          Min: <span id="min-temp-today">-1</span>°
          <br />
          Humidity: <span id="humidity">68</span>%
          <br />
          Wind: <span id="wind-speed">1.3</span> m/s
        </p>
      </div>
    </div>
  );
}
