import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CreateAccount from "./login/CreateAccount";
import Login from "./login/Login";
import StartPage from "./start/StartPage";

import CartPage from "./cart/CartPage";

import OrderPage from "./cart/OrderPage";

import UserHomePage from "./userView/UserHomePage";
import UserInfo from "./userView/UserInfo";
import SuccsessPage from "./stripe/SuccessPage";
import CancelPage from "./stripe/CancelPage";
import ScrollToTop from "./ScrollToTop";
import CookieConsent, { Cookies } from "react-cookie-consent";

import './App.scss';

const stripePromise = loadStripe('pk_test_51KIrmMKydFVV4O5pbXcVA2jLQbS3wNlbptKM3U9V725b9pBtZNB8eaCajooBNfRl4QJ88SVIhgv61xnVZDnmY352003CBKMCVi');


function App() {


  return (

    <Router>

      <ScrollToTop />

      <Switch>
        <Route exact path="/">
          <StartPage />
          <CookieConsent 
          debug={true}
          style={{ background: '#000'}}
          buttonStyle={{ background: '#75A488', color: '#fff' }}
          buttonText="Acceptera"
          >
            Denna webbplats använder cookies för att förbättra användarupplevelsen. Se vår integritetspolicy, genom att acceptera detta meddelande.</CookieConsent>
        </Route>

        <Route exact path="/createAccount">
          <CreateAccount />
        </Route>

        <Route exact path="/login" component={Login}>
          <Login />
        </Route>

        <Route exact path="/cartPage">
          <Elements stripe={stripePromise}>
            <CartPage />
          </Elements>
        </Route>

        <Route exact path="/orderPage">
          <OrderPage />
        </Route>

        <Route exact path="/userHomePage">
          <UserHomePage />
        </Route>

        <Route exact path="/userInfo">
          <UserInfo />
        </Route>

        <Route exact path="/succsessPage">
          <SuccsessPage />
        </Route>

        <Route exact path="/cancelPage">
          <CancelPage />
        </Route>

        <Route exact path="/userHomePage">
          <UserHomePage />
        </Route>

        <Route exact path="/userInfo">
          <UserInfo />
        </Route>

      </Switch>

    </Router >
  );
}

export default App;
