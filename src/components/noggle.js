import React from "react";

const Noggle = () => {
  return (
    <div className="card">
      <img src={require("../img/noggle.png")} alt="lolei.com landing page" />
      <div className="back">
        <div className="Summary">
          <h3 className="project-name">Noggle</h3>
          <p className="project-description">
            An app designed for parents or teachers to track and manage the
            books their children or students have read.
          </p>
        </div>
        <div className="overview">
          <div className="left">
            <h3 className="overview-header">Built With</h3>
            <p className="overview-content">React / Redux</p>
            <p className="overview-content">Rails</p>
            <p className="overview-content">Semantic UI React</p>
          </div>
          <hr />
          <div className="right">
            <h3 className="overview-header">Key Features</h3>
            <p className="overview-content">Admin and User Accounts</p>
            <p className="overview-content">Amazon Products API</p>
          </div>
        </div>
        <div className="btn-container">
          <button className="overview-btn">Github</button>
          <button className="overview-btn">Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Noggle;
