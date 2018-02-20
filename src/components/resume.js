import React from "react";
import { withRouter } from "react-router-dom";
import "../style/resume.css";

const Resume = props => {
  return (
    <div>
      <div id="resume-container">
        <iframe
          title="resume"
          src="https://docs.google.com/presentation/d/e/2PACX-1vR1CNeyEUXZ-fEtIT8RzBgUsY8OSxKyA2VDE-73lEskded8PfO8oEiLPite6suTeVMa13VlKaYWWFvi/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="400"
          height="500"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
      </div>
      <button
        style={{ marginTop: "2vh" }}
        className="links-btn"
        onClick={props.goBack}
      >
        <i id="go-back" className="fas fa-home fa-2x links-icon" />
      </button>
    </div>
  );
};

export default withRouter(Resume);
