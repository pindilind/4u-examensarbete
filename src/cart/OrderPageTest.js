import React from "react";

import Typography from '@mui/material/Typography';

import HeaderInlogged from "../headers/HeaderInlogged";
import CollapsibleTable from "../components/OrderTable";
import Footer from "../footer/Footer";

import "../App.scss";
import "./CartPageStyle.scss";

function OrderPage() {
  return (

    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h2>Dina Ordrar</h2>

          <Typography className={'orderDiv'} component="div">
              <CollapsibleTable />
          </Typography>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default OrderPage;

