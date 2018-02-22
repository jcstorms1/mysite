import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Lolei from "../components/lolei";
import N2N from "../components/n2n";
import Noggle from "../components/noggle";
import "../style/projects.css";

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h2 id="projects-header">Projects</h2>
        <div className="projects-container">
          <Lolei />
          <N2N />
          <Noggle />
        </div>
        <button className="links-btn" onClick={this.props.goBack}>
          <i id="go-back" className="fas fa-home fa-2x links-icon" />
        </button>
      </div>
    );
  }
}

export default withRouter(Projects);
