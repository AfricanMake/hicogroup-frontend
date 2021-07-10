import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./LoginComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";


class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route
                path="/welcome/:name"
                component={WelcomeComponent}
              />

              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
        {/*<LoginComponent/>
                <WelcomeComponent/>*/}
      </div>
    );
  }
}

export default TodoApp;