import React, { useEffect, useState } from "react";
import { useStripe } from '@stripe/react-stripe-js';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead'; 
import TableRow from '@mui/material/TableRow'; 
import TableCell from '@mui/material/TableCell'; 
import TableBody from '@mui/material/TableBody'; 
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HeaderInlogged from "../headers/HeaderInlogged";
import CartTable from "../components/CartTable";
import Footer from "../footer/Footer";
import "../App.scss";
import "./CartPageStyle.scss";

//document.title = 'Varukorgen';
//TODO Se över räkningen av momsen 25%/20% 
const TAX_RATE = 0.25; 

function ccyFormat(num) { 
  return `${num.toFixed(2)}`; 
}

function subtotal(item) { 
  return item.map(({ price }) => price).reduce((sum, i) => sum + i, 0); 
} 

export default function CartPage(props) {

  const stripe = useStripe();

  const [itemCount, setItemCount] = useState(1);
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log(cart)
  console.log(orders)


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
    }
    

      setCounter(counter);
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
    console.log(cartArray)
    
    return cartArray.map((value, index) => {
      console.log(value)
      const invoiceSubtotal = subtotal(value); 
      const invoiceTaxes = TAX_RATE * invoiceSubtotal; 
      const invoiceTotal = invoiceTaxes + invoiceSubtotal; 

      return (
        <>
        <TableBody> 
          <TableRow key={value.desc}> 
            <TableCell>{value.price_data.product_data.name}</TableCell> 
            <TableCell align="left">23 februari, 2022</TableCell> 
            <TableCell align="left">18:30</TableCell> 
            <TableCell align="left">{value.quantity}</TableCell> 
            <TableCell align="left">{ccyFormat(value.price_data.unit_amount/100)}</TableCell> 
            <TableCell align="right">{ccyFormat(value.price_data.unit_amount/100)}</TableCell> 
            <TableCell align="center"> 
              <Button onClick={() => {
                  setItemCount(itemCount + 1);
              }}
                >+</Button>
              <Button onClick={() => {
                  setItemCount(Math.max(itemCount - 1, 0));
              }}
              >-</Button>
            </TableCell> 

          </TableRow> 
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell> 
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
    
        </TableBody> 
         </>
      );
    });
  }
    
  /* const invoiceSubtotal = subtotal(value); 
  const invoiceTaxes = TAX_RATE * invoiceSubtotal; 
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;  */
  
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
          <h2>Din varukorg</h2>

          <>
            <Table sx={{ minWidth: 350, maxWidth: 700 }} aria-label="spanning table">
              <TableHead align="center">
                <TableRow>
                  <TableCell>Produkt/Event </TableCell>
                  <TableCell align="left">Datum</TableCell>
                  <TableCell align="left">Tid</TableCell>
                  <TableCell align="left">Antal</TableCell>
                  <TableCell align="left">Pris</TableCell>
                  <TableCell align="right">Summa, kr</TableCell>
                </TableRow>
              </TableHead>
              {renderCart()}
            </Table>
              </>
              
          <Typography className={'btnDiv'} component="div">

            <Button
              onClick={toCheckOut}
            >
              Till Checkout
            </Button>


          </Typography>

      <Footer />
      </div>
      </div>

    </>
  );
}

