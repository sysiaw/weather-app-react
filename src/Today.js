import React from "react";

import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

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

        <UnitConversion
          celsius={props.data.temperature}
          maxCelsius={props.data.max}
          minCelsius={props.data.min}
        />
        <p>
          Humidity: <span id="humidity">{props.data.humidity}</span>%
          <br />
          Wind: <span id="wind-speed">{props.data.wind}</span> m/s
        </p>
      </div>
    </div>
  );
}
