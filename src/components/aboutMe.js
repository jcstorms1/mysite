import React from "react";
import { withRouter } from "react-router-dom";
import "../style/aboutMe.css";

const AboutMe = props => {
  return (
    <div id="about-me">
      <div id="about-me-container">
        <img id="me" alt="" src={require("../img/me.jpg")} />
        <h2>About Me</h2>
        <p>
          I'm a full stack web developer located in New Jersey. I've done a lot,
          from pumping gas to pursuing a Ph.D in Computational Neuroscience.
          During grad school I taught myself Python and I was hooked, ready to
          take a new path. Coding has allowed me to creatively solve problems
          and build applications that help make life better and more fun. I'm
          excited to see where this ride takes me next.
        </p>
      </div>
    </div>
  );
};
export default withRouter(AboutMe);
