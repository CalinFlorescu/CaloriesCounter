import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "../views/LandingPage";

export default function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
      </Switch>
    </Router>
  );
}
