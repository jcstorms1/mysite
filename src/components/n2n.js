import React from "react";
import { Link } from "react-router-dom";

const N2N = () => {
  return (
    <div className="card">
      <img src={require("../img/n2n-home.png")} alt="lolei.com landing page" />
      <div className="back">
        <div className="Summary">
          <h3 className="project-name">New2Neighborhood</h3>
          <p className="project-description">
            N2N allows users to search for food or drink venues that can be
            added to a list and marked as visited.
          </p>
        </div>
        <div className="overview">
          <div className="left">
            <h3 className="overview-header">Built With</h3>
            <p className="overview-content">React / Redux</p>
            <p className="overview-content">Rails</p>
            <p className="overview-content">React Materialize</p>
          </div>
          <hr />
          <div className="right">
            <h3 className="overview-header">Key Features</h3>
            <p className="overview-content">Foursquare API</p>
            <p className="overview-content">Google Maps</p>
          </div>
        </div>
        <div className="btn-container">
          <form
            target="_blank"
            action="https://github.com/jcstorms1/new2neighborhood-frontend"
          >
            <button className="overview-btn">Github</button>
          </form>
          <button className="overview-btn disabled">Demo Soon</button>
        </div>
      </div>
    </div>
  );
};

export default N2N;
