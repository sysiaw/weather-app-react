import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleForecast(response) {
    setForecast(response.data.daily);
    console.log(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <h2>This week</h2>
        <WeatherForecast data={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "238de8ebfdbed23208cdb21bb0ba9714";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
