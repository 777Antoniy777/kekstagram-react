import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from "react-redux";
// import './css/normalize.css'
// import './css/fonts.css'
// import './css/visually-hidden.css'
// import './css/text-content.css'
// import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
