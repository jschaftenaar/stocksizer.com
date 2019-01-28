import React from "react";
import {  Route } from "react-router-dom";
import Overview from './Containers/Overview';
import Size from './Containers/Size';
import Settings from './Components/Settings';
import Position from './Containers/Position';

const Router = () => (
  <React.Fragment>
    <Route path="/" exact component={Overview} />
    <Route path="/settings/" component={Settings} />
    <Route path="/position/:uuid" component={Position} />
    <Route path="/size/" component={Size} />
  </React.Fragment>
);

export default Router;
