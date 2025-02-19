import React from 'react';
import ReactDOM from 'react-dom/client';
import ReduxApp from './Components/ReduxApp';
import { Provider } from 'react-redux';
import store from './app/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    < ReduxApp/>
  </Provider>
);

