import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p id="footer">
        This project was coded by{" "}
        <a href="https://github.com/sysiaw" target="_blank" rel="noreferrer">
          Chara Siaw
        </a>
        , is{" "}
        <a
          href="https://github.com/sysiaw/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        , and{" "}
        <a
          href="https://frosty-bose-b2a307.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </p>
    </div>
  );
}
