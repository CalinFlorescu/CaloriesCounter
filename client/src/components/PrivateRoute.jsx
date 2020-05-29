import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function PrivateRoute({
  component: Component,
  checkFunction,
  path,
  ...rest
}) {
  if (path === "/user") {
    return (
      <Route
        {...rest}
        render={() => {
          return checkFunction() ? (
            <DndProvider backend={HTML5Backend}>
              <Component />
            </DndProvider>
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={() => {
        return checkFunction() ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
}
