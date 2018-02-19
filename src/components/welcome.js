import React from "react";
import { withRouter } from "react-router-dom";

const Welcome = props => {
  return (
    <div id="btn-container">
      <button
        className="btn"
        id="about-me-btn"
        name="about"
        onClick={props.btnClick}
      >
        About Me
      </button>
      <button className="btn" id="projects-btn">
        Projects
      </button>
      <button
        className="btn"
        id="resume-btn"
        name="resume"
        onClick={props.btnClick}
      >
        Resume
      </button>
    </div>
  );
};

export default withRouter(Welcome);
