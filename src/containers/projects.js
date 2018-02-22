import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../style/projects.css";

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h2 id="projects-header">Projects</h2>
        <div className="projects-container">
          <div className="card">
            <img
              src={require("../img/lolei.png")}
              alt="lolei.com landing page"
            />
            <div className="back">hi</div>
          </div>
          <div className="card">
            <img
              src={require("../img/n2n-home.png")}
              alt="lolei.com landing page"
            />
            <div className="back">hi again</div>
          </div>
          <div className="card">
            <img
              src={require("../img/noggle.png")}
              alt="lolei.com landing page"
            />
            <div className="back">hi again</div>
          </div>
        </div>
        <button className="links-btn" onClick={this.props.goBack}>
          <i id="go-back" className="fas fa-home fa-2x links-icon" />
        </button>
      </div>
    );
  }
}

export default withRouter(Projects);
