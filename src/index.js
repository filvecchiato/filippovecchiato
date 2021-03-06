import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from './global-styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './Utilities/store/reducers/location';
import uiReducer from './Utilities/store/reducers/UI';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
  location: locationReducer,
  UI: uiReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)	
));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App className="App"/>
        <GlobalStyle/>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
