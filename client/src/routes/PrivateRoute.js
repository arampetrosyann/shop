import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = function ({ rend = true, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return rend ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
