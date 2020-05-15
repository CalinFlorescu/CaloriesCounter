import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "../views/LandingPage";
import Info from "./Info";
import Login from "./Login";
import Register from "./Register";

export default function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <LandingPage children={Info} />} />
        <Route
          exact
          path="/login"
          render={() => <LandingPage children={Login} />}
        />
        <Route
          exact
          path="/register"
          render={() => <LandingPage children={Register} />}
        />
      </Switch>
    </Router>
  );
}
