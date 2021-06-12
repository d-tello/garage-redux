import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history";

import "../assets/stylesheets/application.scss";

import carsReducer from "./reducers/cars_reducer";
import garageReducer from "./reducers/garage_reducer";

import CarsIndex from "./containers/cars_index";

const garageName =
  prompt("What is your garage?") ||
  `garage${Math.floor(10 + Math.random() * 90)}`;
const initialState = {
  garage: garageName,
  cars: [],
};

const reducers = combineReducers({
  garage: garageReducer,
  cars: carsReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={CarsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
