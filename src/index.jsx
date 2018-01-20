import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import allReducers from './reducers';

import App from './App';

const root = document.getElementById('root');
const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);


const load = () => render(
  (
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
  ), root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
