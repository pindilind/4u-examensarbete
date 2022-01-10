import React from "react";

import Typography from '@mui/material/Typography';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import "../App.scss";
import "./CartPageStyle.scss";

function OrderPage() {
  return (

    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h1>Dina Ordrar</h1>

          <Typography className={'orderDiv'} component="div">
              <div>Ordernummer</div>
              <div>Titel</div>
              <div>Antal</div> 
          </Typography>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default OrderPage;