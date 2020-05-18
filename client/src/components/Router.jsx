import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

// Components
import Info from "./Info";
import Login from "./Login";
import Register from "./Register";

// Views
import User from "../views/UserView";
import Admin from "../views/AdminView";
import LandingPage from "../views/LandingPage";
import UserAdmin from "../views/UserAdminView/UserAdmin";

import { isUser, isUserAdmin, isAdmin } from "../utils/checkUserType";

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
        <PrivateRoute
          exact
          path="/user"
          checkFunction={isUser}
          component={User}
        />
        <PrivateRoute
          exact
          path="/user-admin"
          checkFunction={isUserAdmin}
          component={UserAdmin}
        />
        <PrivateRoute
          exact
          path="/admin"
          checkFunction={isAdmin}
          component={Admin}
        />
      </Switch>
    </Router>
  );
}
