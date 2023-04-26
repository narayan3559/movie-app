import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';
import { legacy_createStore, applyMiddleware, compose } from "redux";

const logger = ({ dispatch, getState }) => (next) => (action) => {
  next(action)
  console.log(action);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewareList = [thunk, logger];

const enhancer = composeEnhancers(applyMiddleware(...middlewareList));


const store = legacy_createStore(rootReducer, enhancer);
store.subscribe(() => {
  console.log(store.getState());
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App store={store} />
  </>
);


// key: e68fb698 

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e68fb698

// https://www.omdbapi.com/?apikey=e68fb698&t=batman