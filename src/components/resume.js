import React from "react";
import { withRouter } from "react-router-dom";

const Resume = props => {
  return (
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
  );
};

export default withRouter(Resume);
