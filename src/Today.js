import React from "react";

import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

import "./Today.css";

export default function Today(props) {
  return (
    <div className="Today">
      <h2>Today</h2>
      <div className="content">
        <span id="date">
          <FormatDate date={props.data.timezone} />
        </span>
        <h4>
          <span id="weather-description">{props.data.description}</span>
        </h4>
        <div className="weatherIcon">
          <WeatherIcon code={props.data.icon} size={120} />
        </div>
        <h3>{Math.round(props.data.temperature)} °C</h3>

        <p>
          Max: {Math.round(props.data.max)}°
          <br />
          Min: {Math.round(props.data.min)}°
          <br />
          Humidity: {props.data.humidity}%
          <br />
          Wind: {props.data.wind} m/s
        </p>
      </div>
    </div>
  );
}
