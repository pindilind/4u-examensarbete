import React from "react";

import Typography from '@mui/material/Typography';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import "../App.scss";

function CancelPage() {


  return (

    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h1>DITT KÖP GICK INTE IGENOM</h1>

          <Typography component="div">

          </Typography>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default CancelPage;
