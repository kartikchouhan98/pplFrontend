import React from "react";
import Header from "../../components/Header/header";
import Content from "./content";
import {Route, Switch} from 'react-router-dom'
import Login from "./login";
import Signup from "./signup";
import Forgot from "./forgot";

import Footer from "../../components/Footer/footer";

export default function index() {
  return (
    <div>
      <Header />
      <div className="container">
          <div className="content">
      <Content/>
      <Switch>

      <Route exact path='/' component={Signup}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/forgot' component={Forgot}/>

      </Switch>
      </div>
      </div>
      <Footer />
    </div>
  );
}
