import React, { useEffect, useState } from "react";
import { useStripe } from '@stripe/react-stripe-js';
import { Link } from "react-router-dom"

import { Button } from '@mui/material';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import "../App.scss";
import "./CartPageStyle.scss";

import { makeStyles } from '@mui/styles';

//document.title = 'Varukorgen';

//Momssatsen är 25%, men eftersom vi räknar bakåt från totalsumman använder vi 20% 
const TAX_RATE = 0.20;

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  cartTableHead: {
    width: "100%",
    backgroundColor: '#75A488',
    color: '#ffffff',
    fontWeight: 'bold',

    '@media (max-width: 480px)': {
      minWidth: '100%',
    },
    tBody: {
      width: '100%',
    },
    cartTableHeadValue: {

    }
  },
  cartValuesTr: {
    backgroundColor: 'red',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  cartValues: {
    width: "20%",
    margin: 0,
    padding: 0,
    marginTop: '1rem',
    backgroundColor: 'blue',
  }



});

export default function CartPage(props) {

  const stripe = useStripe();

  const classes = useStyles()

  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);

  const [cart, setCart] = useState([]);

  function updateCounter() {

    let cart = JSON.parse(localStorage.getItem("cart"));

    let amount = 0;
    let counter = 0;

    if (cart !== null) {

      for (const key in cart) {
        if (Object.hasOwnProperty.call(cart, key)) {
          const cartRow = cart[key];
          counter += cartRow.quantity
          amount += cartRow.price * cartRow.quantity

        }
      }
    }
    setCounter(counter);
    setAmount(amount);

  }

  useEffect(() => {

    async function getCartItem() {

      let cart = JSON.parse(localStorage.getItem("cart"));

      if (!cart || Object.keys(cart).length === 0) {
        throw new Error("You cart is empty!");
      }
      setCart(cart);

      return cart;
    }

    getCartItem();

    updateCounter();

  }, [setCart]);


  function renderCart() {

    let cartArray = Object.values(cart);

    return cartArray.map((value, index) => {

      return (

        <tr key={index} className={classes.cartValuesTr}>
          <td className={classes.cartValues}>{value.productTitle}</td>
          <td className={classes.cartValues}>{value.date}</td>
          <td className={classes.cartValues}>{value.time}</td>
          <td className={classes.cartValues}>{value.quantity}</td>
          <td className={classes.cartValues}>{value.price}</td>
          <td className={classes.cartValues}>{value.quantity * value.price}</td>

          <td className={classes.cartValues}>
            <Button onClick={() => {
              const key = value.productTitle;

              cart[key].quantity = cart[key].quantity || 0;
              cart[key].quantity++;

              localStorage.setItem("cart", JSON.stringify(cart));
              setCart(Object.assign({}, cart));

              updateCounter();

            }}>+</Button>

            <Button onClick={() => {
              const key = value.productTitle;

              cart[key].quantity = cart[key].quantity || 0;
              cart[key].quantity--;

              if (cart[key].quantity === 0) {
                delete cart[key]
              }

              localStorage.setItem("cart", JSON.stringify(cart));
              setCart(Object.assign({}, cart));

              updateCounter();
            }} >-</Button>
          </td>
        </tr>

      );
    });
  }


  async function toCheckOut() {

    try {

      const response = await fetch('http://localhost:3005/create-checkout-session', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.values(cart),
        ),
      });

      console.log(response)
      const { id } = await response.json();
      localStorage.setItem("session", id)

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

          <div className="displayFlexDiv">
            <h1 className="titleRegisterAndLogin">Din varukorg</h1>

            <table className={classes.table}>
              <thead className={classes.cartTableHead}>
                <tr>
                  <th className={classes.cartTableHeadValue}>
                    Titel
                  </th>
                  <th className={classes.cartTableHeadValue}>Datum</th>
                  <th className={classes.cartTableHeadValue}>Tid</th>
                  <th className={classes.cartTableHeadValue}>Antal</th>
                  <th className={classes.cartTableHeadValue}>Pris</th>
                  <th className={classes.cartTableHeadValue}>Total, s:a</th>

                </tr>
              </thead>

              <tbody className={classes.tBody}>
                {renderCart()}
              </tbody>

              <tfoot>
                <tr>
                  <td>Moms ingår med (25%): {`${TAX_RATE * amount} SEK`}</td>
                </tr>
                <tr>
                  <td>
                    Totalt pris att betala:
                  </td>
                  <td>
                    {`${amount} SEK`}
                  </td>
                </tr>
              </tfoot>

            </table>

          </div>
          <div style={{
            display: "flex",
            marginTop: "2em",
          }}>

            <Link to="/userHomePage">
              <button>Fortsätt handla</button>
            </Link>

            <button>Töm varukorgen</button>

          </div>

          <div className={'btnDiv'} component="div">

            <button
              className={'btnStylingCart'}
              onClick={toCheckOut}
            >
              Till Checkout
            </button>


          </div>

        </div>
      </div>

      <Footer />
      {/* sx={{ minWidth: 350, maxWidth: 800 }}  */}
    </>
  );
}

