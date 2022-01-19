import React, { useEffect, useState } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js'; 
import {
  Stripe
  /* Elements, */
  /*useStripe, */
  /* useElements, */
} from '@stripe/react-stripe-js';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";
import "../App.scss";
import "./CartPageStyle.scss";
/* import Stripe from "../stripe/Stripe"; */
//import Checkout from "../stripe/Checkout"

document.title = 'Varukorgen';

export default function CartPage(props) {
  //const stripe = loadStripe('pk_test_51KIrmMKydFVV4O5pbXcVA2jLQbS3wNlbptKM3U9V725b9pBtZNB8eaCajooBNfRl4QJ88SVIhgv61xnVZDnmY352003CBKMCVi'); 

  //const stripe = useStripe();
  /* const elements = useElements();  */
   
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
        <div key={value}>{value.price_data.product_data.title}</div>
      );
    });
  }

  

//async function toCheckOut() {
const toCheckOut = async () => {
const stripe = await loadStripe('pk_test_51KIrmMKydFVV4O5pbXcVA2jLQbS3wNlbptKM3U9V725b9pBtZNB8eaCajooBNfRl4QJ88SVIhgv61xnVZDnmY352003CBKMCVi'); 
console.log("clickad")

const response = await fetch('/api/session/new', {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
      line_items: Object.values(cart),
  }),
  
});
console.log(response)
  const { id } = await response.json();
    localStorage.setItem("session", id)

    stripe.redirectToCheckout({ sessionId: id })
  /*  try {
        
    if (!cart || Object.keys(cart).length === 0) {
        throw new Error("You cart is empty!");
  
    }
    const response = await fetch('/create-checkout-session', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          line_items: Object.values(cart),
      }),
  });
    const { id } = await response.json();
    localStorage.setItem("session", id)
  
    stripe.redirectToCheckout({ sessionId: id })

} catch (err) {
    console.log(err)
}*/   
} 


  return (
    <>
      <HeaderInlogged counter={counter} />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h1>Your Cart</h1>

          <Typography className={'productDiv'} component="div">
            RENDERA COMPONENT HÄR
            {renderCart()}
          </Typography>

          <Typography className={'priceDiv'} component="div">

            <Typography className={'totalPrice'}>
              122000 kr

            </Typography>
           
            <Typography>
              <Button onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
              >-</Button>
              <Button onClick={() => {
                setItemCount(itemCount + 1);
              }}
              >+</Button>
            </Typography>

          </Typography>

          <Typography className={'btnDiv'} component="div">

         

            <button
            onClick={toCheckOut}
            > 
              Till Checkout
            </button>
            {/* <Stripe /> */}
  
         
          </Typography>

        </div>
      </div>

      <Footer />

    </>

  );
}

