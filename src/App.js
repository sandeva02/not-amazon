import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Checkout } from "./components/Checkout/Checkout";
import { Login } from "./components/Login/Login";
import { auth } from "./utils/firebase";
import { useStateValue } from "./context/StateProvider";
import { actionTypes } from "./context/reducer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          payload: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          payload: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
