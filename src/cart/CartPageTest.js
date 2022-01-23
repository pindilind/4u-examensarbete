import React, { useEffect, useState } from "react";

import { useStripe } from '@stripe/react-stripe-js';

import SpanningTable from "../components/CartTable";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";
import "../App.scss";
import "./CartPageStyle.scss";
/* import Stripe from "../stripe/Stripe"; */

//document.title = 'Varukorgen';

export default function CartPageTest(props) {

  const stripe = useStripe();

  const [itemCount, setItemCount] = useState(1);
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);
  console.log(cart)

  function updateCounter() {

    let cart = JSON.parse(localStorage.getItem("cart"));

    let amount = 0;
    let counter = 0;

    if (cart !== null) {

      for (const key in cart) {
        if (Object.hasOwnProperty.call(cart, key)) {
          const cartRow = cart[key];
          counter += cartRow.quantity
          amount += cartRow.price_data.unit_amount * cartRow.quantity
        }
      }
      setCounter(counter);
    }
  }


  useEffect(() => {

    async function getCartItem() {
      let cart = JSON.parse(localStorage.getItem("cart"));
      console.log(cart)

      return cart;
    }

    getCartItem().then(result => {
      setCart(result);
    });

    updateCounter();

  }, [setCart]);

  function renderCart() {

    let cartArray = Object.values(cart);

    return cartArray.map(value => {
      console.log(value)

      return (
        <div key={value}>{value.price_data.product_data.name}</div>
      );
    });
  }

  async function toCheckOut() {

    try {

      if (!cart || Object.keys(cart).length === 0) {
        throw new Error("You cart is empty!");

      }
      const response = await fetch('http://localhost:3005/create-checkout-session', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          line_items: Object.values(cart),
        }),
      });

      console.log(response)
      const { id } = await response.json();
      localStorage.setItem("session", id)
      console.log(id)

      stripe.redirectToCheckout({ sessionId: id })

    } catch (err) {
      console.log(err)
    }
  }

    return (
        <>
        <HeaderInlogged counter={counter} />
            <div className="wrappsAllContent">
            <div className="flexCenterAll ">
          <h2>Din varukorg</h2>
          <Typography className={'productDiv'} component="div">
          
            {/* {renderCart()} */}
        <SpanningTable />
          </Typography>
         <Typography className={'btnDiv'} component="div">

         <Button
           onClick={toCheckOut}
           >
           Till Checkout
         </Button>


       </Typography>
       </div>
       </div>
             </>
    )
}