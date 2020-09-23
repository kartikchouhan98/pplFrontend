import React from "react";
// import Register from './components/register'
import Auth from "./screens/auth";
import { Route, Switch } from "react-router-dom";

import Home from "./screens/home";
// import Footer from './components/Footer/footer'
// import Content from './screens/auth/content'
// import Login from './screens/auth/login'

export default function App(props) {

  return (
    <Switch>
      <Route path="/home" component={Home} />

      <Route path={["/", "/login", "/register", "/forgot"]} component={Auth} />
    </Switch>
  );
}
