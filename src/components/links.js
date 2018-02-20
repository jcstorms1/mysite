import React from "react";

const Links = props => {
  return (
    <div className="links">
      {props.showHome ? (
        <button className="links-btn" onClick={props.goBack}>
          <i id="go-back" className="fas fa-home fa-2x links-icon" />
        </button>
      ) : null}
      <button className="links-btn" onClick={() => console.log("hi")}>
        <a href="https://github.com/jcstorms1">
          <i className="fab fa-github fa-2x links-icon" />
        </a>
      </button>
      <button className="links-btn" onClick={() => console.log("hi")}>
        <i className="fab fa-linkedin fa-2x linkedin" />
      </button>
      <button className="links-btn" onClick={() => console.log("hi")}>
        <i className="fab fa-medium fa-2x links-icon" />
      </button>
    </div>
  );
};

export default Links;
