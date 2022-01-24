import React, { useState } from "react";

import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheitTemperature() {
    return (props.celsius * 9) / 5 + 32;
  }

  function maxFahrenheitTemperature() {
    return (props.maxCelsius * 9) / 5 + 32;
  }

  function minFahrenheitTemperature() {
    return (props.minCelsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <h3>
          <span id="temperature-today">{Math.round(props.celsius)}</span> °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </h3>
        <p>
          <span id="max-temp-today">Max: {Math.round(props.maxCelsius)}°</span>
          <br />
          <span id="min-temp-today">Min: {Math.round(props.minCelsius)}°</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <h3>
          <span id="temperature-today">
            {Math.round(fahrenheitTemperature())}
          </span>{" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </h3>
        <p>
          <span id="max-temp-today">
            Max: {Math.round(maxFahrenheitTemperature())}°
          </span>
          <br />
          <span id="min-temp-today">
            {" "}
            Min: {Math.round(minFahrenheitTemperature())}°
          </span>
        </p>
      </div>
    );
  }
}
