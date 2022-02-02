import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reducers from "./store/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

import createSagaMiddleware from "redux-saga";
import apiReducer from "./store/apiReducer";
import loginReducers from "./store/loginReducers";
import watcherSagaForApiRequest from "./sagas/saga";
import history from "./history";

const rootReducers = combineReducers({
  reducers,
  apiReducer,
  loginReducers
});
const sagaWare = createSagaMiddleware();
const store = createStore(rootReducers, applyMiddleware(sagaWare));

sagaWare.run(watcherSagaForApiRequest);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider history={history} store={store}>
    <App />
  </Provider>,
  rootElement
);
