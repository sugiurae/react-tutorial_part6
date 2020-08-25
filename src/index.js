import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from "./App.js";
// import App from './containers/App';
// import createStore from './createStore';


const app = document.getElementById('app');
ReactDOM.render(<App/>, app);