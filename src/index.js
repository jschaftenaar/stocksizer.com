import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers'
import { BrowserRouter } from "react-router-dom";

const appState = localStorage.getItem('appState')
  ? JSON.parse(localStorage.getItem('appState'))
  : {};

const store = createStore(rootReducer, appState)

store.subscribe(() => {
  localStorage.setItem('appState', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
