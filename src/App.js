import React, { Component } from 'react';
import Menu from './Containers/Menu';
import Header from './Components/Header';
import style from './App.module.scss';
import Router from './Router.js';

class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Header/>
        <div className={style.content}>
          <Menu/>
          <Router/>
        </div>
      </div>
    );
  }
}

export default App;
