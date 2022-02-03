import React, { useEffect, useState } from "react";
import { useStripe } from '@stripe/react-stripe-js';
import { Link } from "react-router-dom"

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import { makeStyles } from '@mui/styles';

import "../App.scss";
import "./CartPageStyle.scss";

//document.title = 'Varukorgen';

//Momssatsen är 25%, men eftersom vi räknar bakåt från totalsumman använder vi 20% 
const TAX_RATE = 0.20;

const useStyles = makeStyles({
  renderCartDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',

    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },

  valuesDiv: {
    borderRadius: '1rem',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '30%',
    maxWidth: '30%',
    backgroundColor: '#75A488',
    color: '#ffffff',
    '@media (max-width: 480px)': {
      minWidth: '90%',
      maxWidth: '90%',
      marginBottom: '0.7rem'
    }
  },

  cartValuesTitel: {
    fontWeight: 'bold',
    width: '100%',
    padding: '0.5rem',
    alignSelf: 'center',
  },
  cartValues: {
    width: '100%',
    textAlign: 'center',
  },
  btnQuantDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '3rem',
  },
  cartValuesQutant: {
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '3rem',
    textAlign: 'center'
  },
  momsTotalPriceDiv: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  moms: {
    fontWeight: 'bold',
  },
  totalPriceDiv: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    '@media (max-width: 480px)': {
      fontSize: '1.3rem',
    }
  },

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

        <div key={index} className={classes.valuesDiv}>
          <div className={classes.cartValuesTitel}>{value.productTitle}</div>
          <div className={classes.cartValues}>Datum: {value.date}</div>
          <div className={classes.cartValues}>Tid: {value.time}</div>
          <div className={classes.cartValues}>Pris: {value.price}</div>
          <div className={classes.cartValues}>Totalt Pris: {value.quantity * value.price} kr</div>

          <div className={classes.btnQuantDiv}>

            <button className="btnStylingPlusAndMinus" onClick={() => {
              const key = value.productTitle;

              cart[key].quantity = cart[key].quantity || 0;
              cart[key].quantity--;

              if (cart[key].quantity === 0) {
                delete cart[key]
              }

              localStorage.setItem("cart", JSON.stringify(cart));
              setCart(Object.assign({}, cart));

              updateCounter();
            }} >-</button>

            <div className={classes.cartValuesQutant}>{value.quantity}</div>

            <button className="btnStylingPlusAndMinus" onClick={() => {
              const key = value.productTitle;

              cart[key].quantity = cart[key].quantity || 0;
              cart[key].quantity++;

              localStorage.setItem("cart", JSON.stringify(cart));
              setCart(Object.assign({}, cart));

              updateCounter();

            }}>+</button>

          </div>
        </div>
      );
    });
  }


  async function toCheckOut() {

    try {

      const response = await fetch('https://event4u.online/create-checkout-session', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart: Object.values(cart)
        }),
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
          <h1 className="titleRegisterAndLogin">Din varukorg</h1>

          <div>

            <div className={classes.renderCartDiv}>
              {renderCart()}
            </div>


          </div>
          <div className={classes.momsTotalPriceDiv}>
            <div className={classes.moms}>Moms ingår med (25%): {`${TAX_RATE * amount} SEK`}</div>
            <div className={classes.totalPriceDiv}>Totalt pris att betala: {`${amount} SEK`}</div>
          </div>

          <div className={'btnDivOne'}>

            <Link to="/userHomePage">
              <button className={'btnStylingCartYes'}>Fortsätt handla</button>
            </Link>

            <button className={'btnStylingCartYes'} onClick={() => {
              
              localStorage.removeItem("cart");
              setCart({});

              updateCounter();
            }}
            >Töm varukorgen</button>

          </div>

          <div className={'btnDivTwo'}>

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

    </>
  );
}

