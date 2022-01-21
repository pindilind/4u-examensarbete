import React from "react";

import Typography from '@mui/material/Typography';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import "../App.scss";

function SuccessPage() {

  async function verify() {
    try {
      const sessionId = localStorage.getItem('session')

      if (!sessionId) {
        throw new Error("inget session ID");
      }

      const response = await fetch('http://localhost:3005/session/verify', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId
        })
      });

      const { paid } = await response.json();
      return paid;

    } catch (err) {
      console.log(err)
      return false;
    }
  }

  const isVerified = verify();

  if (localStorage.getItem('session')) {
    if (isVerified) {
      localStorage.removeItem("cart")
      localStorage.removeItem('session')
    } else {
      alert("Betalningen är avbruten. Försök gärna igen!")
    }
  }


  return (

    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h1>Ditt köp gick igenom!</h1>

          <Typography component="div">

          </Typography>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default SuccessPage;
