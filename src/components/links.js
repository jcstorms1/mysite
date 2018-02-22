import React from "react";

const Links = props => {
  return (
    <div className="links">
      {props.showHome ? (
        <button className="links-btn" onClick={props.goBack}>
          <i id="go-back" className="fas fa-home fa-2x links-icon" />
        </button>
      ) : null}
      <button className="links-btn">
        <a href="https://github.com/jcstorms1">
          <i className="fab fa-github fa-2x links-icon" />
        </a>
      </button>
      <button className="links-btn">
        <a href="https://www.linkedin.com/in/jordan-storms-877673b7/">
          <i className="fab fa-linkedin fa-2x linkedin" />
        </a>
      </button>
      <button className="links-btn">
        <a href="https://medium.com/@jordanstorms">
          <i className="fab fa-medium fa-2x links-icon" />
        </a>
      </button>
    </div>
  );
};

export default Links;
