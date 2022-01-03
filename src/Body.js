import React from "react";

import Heading from "./Heading";
import Today from "./Today";
import Forecast from "./Forecast";

export default function Body() {
  return (
    <div className="Body">
      <div className="row g-2">
        <div className="col-12">
          <Heading />
        </div>
        <div className="col-4">
          <Today />
        </div>
        <div className="col-4">
          <Forecast />
        </div>
      </div>
    </div>
  );
}
