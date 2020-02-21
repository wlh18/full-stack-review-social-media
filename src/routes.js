import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Auth/Landing";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/register" component={Register} />
    <Route path="/dash" component={Dashboard} />
    <Route path="/profile" component={Profile} />
  </Switch>
);
