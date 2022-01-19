import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.scss';
import Header from "./headers/HeaderLogga";

import CreateAccount from "./login/CreateAccount";
import Login from "./login/Login";
import StartPage from "./start/StartPage";

import CartPage from "./cart/CartPage";
import OrderPage from "./cart/OrderPage";

import EventPage from "./userView/EventPage";
import UserHomePage from "./userView/UserHomePage";
import UserInfo from "./userView/UserInfo";

import Footer from "./footer/Footer";
import "@stripe/stripe-js";

function App() {
  return (

    <Router>
      {/* <Header /> */}

      {/* <ScrollToTop /> */}

      {/* <div className="wrappsAllContent">
        <div className="flexCenterAll "> */}

          <Switch>

            <Route exact path="/">
              <StartPage />
            </Route>

            <Route exact path="/createAccount">
              <CreateAccount />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/cartPage">
              <CartPage />
            </Route>

            <Route exact path="/orderPage">
              <OrderPage />
            </Route>

            <Route exact path="/eventPage">
              <EventPage />
            </Route>

            <Route exact path="/userHomePage">
              <UserHomePage />
            </Route>

            <Route exact path="/userInfo">
              <UserInfo />
            </Route>

          </Switch>
       {/*  </div>
      </div> */}

      {/* <Footer /> */}

    </Router >
  );
}

export default App;
