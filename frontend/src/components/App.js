import React, { Component, Fragment, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Dashboard from "./products/Dashboard";

import { Provider } from "react-redux";
import store from "../redux/store";

import Login from "./accounts/Login";
import Register from "./accounts/Register";

import PrivateRoute from "./common/PrivateRoute";

import { loadUser } from "../redux/actions/auth";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
