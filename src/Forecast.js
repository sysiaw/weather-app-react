import React from "react";

import "./Forecast.css";

import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleForecast(response) {
    console.log(response.data);
  }
  let apiKey = "238de8ebfdbed23208cdb21bb0ba9714";
  let latitude = props.coords.lat;
  let longitude = props.coords.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecast);

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
