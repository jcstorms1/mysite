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
          I'm a full stack web developer located in New Jersey. I've done a lot
          over the years, from pumping gas to pursuing a PhD in Computational
          Neuroscience. During grad school I taught myself Python and I was
          immediately hooked, ready to take a new path. From there I learned
          JavaScript, Ruby, Ruby on Rails and much more. Coding has allowed me
          to creatively solve problems and build applications that help make
          life better and more fun. I'm excited to see where this ride takes me
          next.
        </p>
      </div>
      <button className="links-btn" onClick={props.goBack}>
        <i id="go-back" className="fas fa-home fa-2x links-icon" />
      </button>
    </div>
  );
};
export default withRouter(AboutMe);
