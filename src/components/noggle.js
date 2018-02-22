import React from "react";
import { Link } from "react-router-dom";

const Noggle = () => {
  return (
    <div className="card">
      <img src={require("../img/noggle.png")} alt="lolei.com landing page" />
      <div className="back">
        <div className="Summary">
          <h3 className="project-name">Noggle</h3>
          <p className="project-description">
            Noggle is a multi-player anagram game where players find as many
            three or more letter words as they can in a minute.
          </p>
        </div>
        <div className="overview">
          <div className="left">
            <h3 className="overview-header">Built With</h3>
            <p className="overview-content">Javascript</p>
            <p className="overview-content">Rails</p>
            <p className="overview-content">Bulma & Custom Css</p>
          </div>
          <hr />
          <div className="right">
            <h3 className="overview-header">Key Features</h3>
            <p className="overview-content">Action Cable Websockets</p>
            <p className="overview-content">Angramica API</p>
            <p className="overview-content">Live Chat & Realtime Scoring</p>
          </div>
        </div>
        <div className="btn-container">
          <Link to="https://github.com/jcstorms1/noggle-app">
            <button className="overview-btn">Github</button>
          </Link>
          <Link to="https://jamesgraham320.github.io/noggle-app/">
            <button className="overview-btn">Demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Noggle;
