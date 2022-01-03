import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h2>This week</h2>
      <div className="forecast-week" id="forecast" />
    </div>
  );
}
