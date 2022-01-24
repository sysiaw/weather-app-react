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
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <h3>
          <span id="temperature-today">
            {Math.round(props.data.temperature)}
          </span>{" "}
          °C
        </h3>
        <p>
          Max: <span id="max-temp-today">{Math.round(props.data.max)}</span>
          °
          <br />
          Min: <span id="min-temp-today">{Math.round(props.data.min)}</span>
          °
          <br />
          Humidity: <span id="humidity">{props.data.humidity}</span>%
          <br />
          Wind: <span id="wind-speed">{props.data.wind}</span> m/s
        </p>
      </div>
    </div>
  );
}
