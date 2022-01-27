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
import { subMilliseconds } from "date-fns";

//document.title = 'Varukorgen';
//Momssatsen är 25%, men eftersom vi räknar bakåt från totalsumman använder vi 20% 
const TAX_RATE = 0.20; 

/* function ccyFormat(num) { 
  return `${num.toFixed(2)}`; 
} */


export default function CartPage(props) {

  const stripe = useStripe();

  const [itemCount, setItemCount] = useState(1);

  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);

  const [cart, setCart] = useState([]);

  const [orders, setOrders] = useState([]);

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
          // amount += cartRow.price_data.unit_amount * cartRow.quantity
          amount += cartRow.price * cartRow.quantity
          console.log(amount)
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
        <TableBody> 
          <TableRow key={value.desc}> 
            {/* <TableCell>{value.price_data.product_data.name}</TableCell>  */}
            <TableCell>{value.productTitle}</TableCell>
            <TableCell align="left">23 februari, 2022</TableCell> 
            <TableCell align="left">18:30</TableCell> 
            <TableCell align="center">{value.quantity}</TableCell> 
            {/* <TableCell align="right">{(value.price_data.unit_amount/100)}</TableCell> */}
            <TableCell align="right">{(value.price)}</TableCell>  
            {/* <TableCell align="right">{(value.quantity * value.price_data.unit_amount/100)}</TableCell> */}
            <TableCell align="right">{(value.quantity * value.price)}</TableCell>


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
          
          
    
        </TableBody> 
         </>
      );
    });
  }
    
  
  async function toCheckOut() {

    let checkOutCart = localStorage.getItem("cart");
    
    try {

     /*  if (!cart || Object.keys(cart).length === 0) {
        throw new Error("You cart is empty!");
      } */

      const response = await fetch('http://localhost:3005/session/createPayment', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: checkOutCart,  
        /* body: JSON.stringify({
          line_items: Object.values(cart),
          cart
        */
        
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
          <TableBody>

            <Table sx={{ minWidth: 350, maxWidth: 800 }} aria-label="spanning table">
              <TableHead align="center">
                <TableRow>
                  <TableCell>Produkt/Event </TableCell>
                  <TableCell align="left">Datum</TableCell>
                  <TableCell align="left">Tid</TableCell>
                  <TableCell align="left">Antal</TableCell>
                  <TableCell align="left">Pris</TableCell>
                  <TableCell align="left">Summa</TableCell>
                </TableRow>
                
              </TableHead>
              {renderCart()}
              
          <TableRow>
            <TableCell>Moms ingår med (25%): </TableCell>
            <TableCell align="right">{`${(TAX_RATE * amount).toFixed(0)} SEK`}</TableCell> 
          </TableRow>
         
          <TableRow>
            <TableCell colSpan={2}>Total, SEK:</TableCell>
             <TableCell align="right">{(amount)}</TableCell>               
          </TableRow>
          </Table>
          </TableBody>
          
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

