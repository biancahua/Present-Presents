import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store/store.js';

// render App inside an HTML element with id 'root'

render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);