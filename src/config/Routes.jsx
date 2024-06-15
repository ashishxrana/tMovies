import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Check from "../components/Check"
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import ForgetPsd from "../components/ForgetPsd";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Check} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/home" exact component={Home} />
      <Route path="/forgetpsd" exact component={ForgetPsd} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
    </Switch>
  );
};

export default Routes;
