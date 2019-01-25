import React from "react";
import {  Route } from "react-router-dom";
import Overview from './Containers/Overview';
import Add from './Components/Add';
import Settings from './Components/Settings';
import Sizer from './Containers/Sizer';

const Router = () => (
  <React.Fragment>
    <Route path="/" exact component={Overview} />
    <Route path="/settings/" component={Settings} />
    <Route path="/position/:id" component={Sizer} />
    <Route path="/add/" component={Add} />
  </React.Fragment>
);

export default Router;
