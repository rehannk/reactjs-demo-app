import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import apiReducer from './store/reducers/api';
import { rootSagas } from "./sagas/saga";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
  api: apiReducer
});
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
