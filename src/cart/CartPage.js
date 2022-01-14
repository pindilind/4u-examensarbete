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

  const [cart, setCart] = useState([]);
  console.log(cart)

  /* const customerId = useSelector(state => state.customer.id);
  console.log(customerId) */

  // const cartItems = props.product;
  /* const cartItems = cart;
  console.log(cartItems) */

 
  
  useEffect(() => {

    async function getCartItem() {
      let cart = JSON.parse(localStorage.getItem("cart"));
    
      return cart;
    }
    
   getCartItem().then(result => {
      setCart(result);
    });

  }, [setCart]);

 function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let cartArray = [cart]
  /* console.log(cartArray) */

   return cartArray.map(key => {
     console.log(key)

      return (
        <div key={key}>{key.key}</div>
       
  
    ); 
    
 });
 
}


  return (
    

    <>

      <HeaderInlogged />
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
                setItemCount(Math.max(itemCount -1, 0));
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

      <Footer/>

    </>

  );
}

export default CartPage;

// Hämta data från localstorage - 
//kolla om cart är tom eller har item - 
//vad göra då? - visa i varukorgen