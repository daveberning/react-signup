import React from "react";
import Signup from './views/SignIn'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const routes = [
  {
    path: "/",
    component: Signup
  },
];

export default function RouteConfig() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RenderedRoute key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RenderedRoute(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}
