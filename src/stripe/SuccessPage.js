import React from "react";

import Typography from '@mui/material/Typography';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import { makeStyles } from '@mui/styles';

import "../App.scss";

const useStyles = makeStyles({
  cancelTitle: {
    paddingTop: "1.5rem",
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
    fontWeight: "bold",

    '@media (max-width: 480px)': {
      minWidth: '100%',
    }
  },
  cancelP: {
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
    marginTop: 0,
  },
  emailDiv: {
    background: "#75A488",
    borderRadius: "1.5rem"
  },
  emailP: {
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
    paddingTop: "1rem",
  },


});

function SuccessPage() {

  const classes = useStyles()

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

          <div>
            <h3 className={classes.cancelTitle}>Tack för ditt köp!</h3>
            <p className={classes.cancelP}>Text Text TExt</p>
          </div>
          <div className={classes.emailDiv}>
            <p className={classes.emailP}>order@event4U.online</p>
          </div>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default SuccessPage;
