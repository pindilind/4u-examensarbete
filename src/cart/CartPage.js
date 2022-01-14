import React, { useState } from "react";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import "../App.scss";
import "./CartPageStyle.scss";

function CartPage() {
  // Lagt till rad 14-20
  const [itemCount, setItemCount] = useState(1);
  const [cart, setCart] = useState();


// Hämta data från localstorage - 
//kolla om cart är tom eller har item - 
//vad göra då? - visa i varukorgen

  return (

    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h1>Your Cart</h1>

          <Typography className={'productDiv'} component="div">
            RENDERA COMPONENT HÄR
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
              >-</Button>
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