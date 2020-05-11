import React from "react";
import { Router as BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "../views/LandingPage";

export default function Router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={<LandingPage />} />
      </Switch>
    </Router>
  );
}
