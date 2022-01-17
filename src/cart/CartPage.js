import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import "../App.scss";
import "./CartPageStyle.scss";
document.title = 'Varukorgen';

function CartPage(props) {
  // Lagt till rad 14-20
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
          /* amount += cartRow.price_data.unit_amount * cartRow.quantity */
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

            <Typography >
              Total amount incl. VAT
            </Typography>

            <Typography className={'totalPrice'}>
              122000 kr



            </Typography>
            {/* Lagt till rad 40-48 */}
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

            <Button
              /* onClick={} */
              size="small"
              color="success"
              variant="contained"
              disableElevation>
              Go To Payment
            </Button>

          </Typography>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default CartPage;

// Hämta data från localstorage -
//kolla om cart är tom eller har item -
//vad göra då? - visa i varukorgen