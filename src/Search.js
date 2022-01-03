import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <form className="row g-3">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-outline-success"
              id="home-button"
            >
              Home
            </button>
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="search-bar"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              id="search-button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
