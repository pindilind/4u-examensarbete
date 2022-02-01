import React, { useEffect, useState } from "react";
import { useStripe } from '@stripe/react-stripe-js';
import { Link } from "react-router-dom"

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Button } from '@mui/material';

//import CartTable from "../components/CartTable";

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import "../App.scss";
import "./CartPageStyle.scss";

import { makeStyles } from '@mui/styles';

document.title = 'Varukorgen';

//Momssatsen är 25%, men eftersom vi räknar bakåt från totalsumman använder vi 20% 
const TAX_RATE = 0.20;

const useStyles = makeStyles({
  overrides: {
    MuiTableRow: {
      backgroundColor: 'red',

      MuiTableCell: {
        root: {
          color: "blue"
        },
      },
    }
  },
});

export default function CartPage(props) {

  const stripe = useStripe();

  const classes = useStyles()

  const [itemCount, setItemCount] = useState(1);

  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);

  const [cart, setCart] = useState([]);

  const [orders, setOrders] = useState([]);


  function updateCounter() {

    let cart = JSON.parse(localStorage.getItem("cart"));

    let amount = 0;
    let counter = 0;

    if (cart !== null) {

      for (const key in cart) {
        if (Object.hasOwnProperty.call(cart, key)) {
          const cartRow = cart[key];
          counter += cartRow.quantity
          amount += cartRow.price * cartRow.counter
          console.log(amount)
          console.log(counter)
        }
      }
    }
    setCounter(counter);
    setAmount(amount);
  }

  useEffect(() => {

    async function getCartItem() {

      let cart = JSON.parse(localStorage.getItem("cart"));
      console.log(cart)

      if (!cart || Object.keys(cart).length === 0) {
        throw new Error("You cart is empty!");
      }

      return cart;
    }

    getCartItem().then(result => {
      setCart(result);
    });

    updateCounter();

  }, [setCart]);

  function renderCart() {


    let cartArray = Object.values(cart);
    console.log(cartArray)

    return cartArray.map((value, index) => {
      console.log(value)


      return (
        <>
          <tr key={value.desc}>
            <td>{value.productTitle}</td>
            <td>{value.date}</td>
            <td>{value.time}</td>
            <td>{cart.link}</td>
            <td>{(counter)}</td>
            <td>{(value.price)}</td>
            <td>{(counter * value.price)}</td>

            <Button onClick={() => setCounter(counter + 1)}>+</Button> 
            <Button onClick={() => setCounter(Math.max(counter - 1, 1))}>-</Button> 
          </tr>

          <tr>
           
          </tr>
        </>
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
      console.log(id)

      stripe.redirectToCheckout({ sessionId: id })

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function getOrders() {

      let order = JSON.parse(localStorage.getItem("session"));
      console.log(order)

      return order;
    }

    getOrders().then(result => {
      setOrders(result)
    });
  }, [setOrders]);



  return (
    <>
      <HeaderInlogged counter={counter} />

      <div className="wrappsAllContent">
        <div className="flexCenterAll ">

          <div className="displayFlexDiv">
            <h1 className="titleRegisterAndLogin">Din varukorg</h1>

            <div className="tableDiv">

            <div classes="orderTable">
              <table>
                <tr style={{
                    width: "100%",
                    backgroundColor: '#75A488',
                    color: '#ffffff',
                    fontWeight: 'bold'
                  }}>
                  
                  <th >
                    Produkt/Titel
                  </th>
                  <th>Datum</th>
                  <th>Tid</th>
                  <th>Antal</th>
                  <th>Pris</th>
                  <th>Total, s:a</th>
                </tr>
                {renderCart()}
                <tr>
                  <td>Moms ingår med (25%): {`${(TAX_RATE * 650).toFixed(0)} SEK`}</td>
                </tr>
                <tr style={{
                    backgroundColor: '#75A488',
                    color: '#ffffff',
                    fontWeight: 'bold',
                  }}>
                    <td style={{
                      color: '#ffffff',
                      fontWeight: 'bold',
                    }} > Totalt pris att betala:
                    </td>
                     <td style={{
                      color: '#ffffff',
                      fontWeight: 'bold',
                    }} > 
                    {`${(counter * 650).toFixed(0)} SEK`}
                   </td>
                </tr>
              </table>
            </div>

                 
            </div>
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

