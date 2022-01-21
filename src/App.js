import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.scss';
import Header from "./headers/HeaderLogga";

import CreateAccount from "./login/CreateAccount";
import Login from "./login/Login";
import StartPage from "./start/StartPage";

import CartPage from "./cart/CartPage";
//import OrderPage from "./cart/OrderPage";
import CollapsibleTable from "./cart/OrderPageTest";

import EventPage from "./userView/EventPage";
import UserHomePage from "./userView/UserHomePage";
import UserInfo from "./userView/UserInfo";
import CheckOutOk from "./stripe/CheckoutOk";

import Footer from "./footer/Footer";


const stripePromise = loadStripe('pk_test_51KIrmMKydFVV4O5pbXcVA2jLQbS3wNlbptKM3U9V725b9pBtZNB8eaCajooBNfRl4QJ88SVIhgv61xnVZDnmY352003CBKMCVi');

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
          <Elements stripe={stripePromise}>
            <CartPage />
          </Elements>
        </Route>

            <Route exact path="/orderPageTest">
              <CollapsibleTable />
              {/* <OrderPage /> */}
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
        <Route exact path="/orderPage">
          <OrderPage />
        </Route>

        <Route exact path="/checkOutOk">
          <CheckOutOk />
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
