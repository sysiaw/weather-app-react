import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p id="footer">
        <a
          href="https://github.com/sysiaw/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a href="https://github.com/sysiaw" target="_blank" rel="noreferrer">
          Chara Siaw
        </a>
      </p>
    </div>
  );
}
