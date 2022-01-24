import React from "react";

import "./Forecast.css";

import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h2>This week</h2>

      <div className="Forecast-content d-flex justify-content-between">
        <span className="Forecast-day">Tue</span>{" "}
        <WeatherIcon code="01d" size={55} />
        <span className="Forecast-temperature">20° / 18°</span>
      </div>
    </div>
  );
}
