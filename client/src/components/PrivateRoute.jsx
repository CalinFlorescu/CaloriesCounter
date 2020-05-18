import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  checkFunction,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => {
        return checkFunction() ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
}
