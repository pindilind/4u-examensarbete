import React from "react";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import HeaderInlogged from "../headers/HeaderInlogged";

import "../App.scss";
import "./CartPageStyle.scss";

function CartPage() {
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

    </>

  );
}

export default CartPage;