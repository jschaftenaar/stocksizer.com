import React from "react";
import {  Route } from "react-router-dom";
import Overview from './Overview';
import Add from './Add';
import Settings from './Settings';

const Sizer = () => <h2>Sizer</h2>;

const Router = () => (
  <React.Fragment>
    <Route path="/" exact component={Overview} />
    <Route path="/settings/" component={Settings} />
    <Route path="/sizer/:id" component={Sizer} />
    <Route path="/add/" component={Add} />
  </React.Fragment>
);

export default Router;
