import React from 'react';
import { render } from 'react-snapshot';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import registerServiceWorker from 'registerServiceWorker';

// state
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import reducers from 'state/reducers';

// routing
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import './index.css';
import App from 'App';

const history = createHistory();
const router = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(promiseMiddleware(), thunk, router),
  ),
);

// render(
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
