import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-content d-flex justify-content-between">
        <span className="WeatherForecast-day">{forecastDay()}</span>{" "}
        <WeatherIcon code={props.data.weather[0].icon} size={55} />
        <span className="WeatherForecast-temperature">
          {maxTemperature()} / {minTemperature()}
        </span>
      </div>
    </div>
  );
}
