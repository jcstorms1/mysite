import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Welcome from "./components/welcome";
import AboutMe from "./components/aboutMe";
import Resume from "./components/resume";
import Projects from "./containers/projects";
import Links from "./components/links";
import "./App.css";

class App extends Component {
  state = {
    fullView: false
  };

  btnClick = e => {
    this.setState({ fullView: true });
    switch (e.target.name) {
      case "about":
        this.props.history.push("/about");
        break;
      case "projects":
        this.props.history.push("/projects");
        break;
      case "resume":
        this.props.history.push("/resume");
        break;
      default:
        this.props.history.push("/");
    }
  };

  goBack = () => {
    this.setState({ fullView: false });
    this.props.history.push("/");
  };

  componentDidMount() {
    if (this.props.history.location.pathname !== "/") {
      this.setState({ fullView: true });
    }
  }

  render() {
    return (
      <div
        id="welcome"
        style={Object.assign({}, this.state.fullView && styles.fill)}
      >
        <Links showHome={this.state.fullView} goBack={this.goBack} />
        <div id="welcome-box">
          <h1 id="welcome-header">Jordan Storms</h1>
          <div id="strike">
            <span>
              <img
                id="bolt"
                src={require("./img/bolt.svg")}
                alt="lightning bolt"
              />
            </span>
          </div>

          <Route
            exact
            path="/"
            render={() => <Welcome btnClick={this.btnClick} />}
          />
          <Route
            exact
            path="/about"
            render={() => <AboutMe goBack={this.goBack} />}
          />
          <Route
            exact
            path="/projects"
            render={() => <Projects goBack={this.goBack} />}
          />
          <Route
            exact
            path="/resume"
            render={() => <Resume goBack={this.goBack} />}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  fill: { top: "0", transition: ".8s all" }
};

export default withRouter(App);
