import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsFillCheckCircleFill } from 'react-icons/bs';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import { makeStyles } from '@mui/styles';

import "../App.scss";

const useStyles = makeStyles({
  succIcon: {
    display: "flex",
    alignSelf: "center",
    color: "#75A488",
    marginTop: "2rem",
    fontSize: "3rem"
  },
  succTitle: {
    display: "flex",
    fontWeight: "bold",

    '@media (max-width: 480px)': {
      minWidth: '100%',
    }
  },
  succP: {
    display: "flex",
    textAlign: "center",
    margin: "auto"
  },
  succText: {
    display: "flex",
    textAlign: "center",
    padding: "0.5rem",

    '@media (max-width: 480px)': {
      minWidth: '80%',
    }

  },
  succP2: {
    display: "flex",
    textAlign: "center",
    margin: "auto",
  },
  mvhP: {
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
    paddingTop: "1rem",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  emailDiv: {
    background: "#75A488",
    borderRadius: "1.5rem"
  },
  emailP: {
    padding: "0.7rem"
  },


});

function SuccessPage() {

  const classes = useStyles()

  const [orderId, setOrderId] = useState('');



  useEffect(() => {

    async function verify() {

      try {
        const sessionId = localStorage.getItem('session');
        const cart = JSON.parse(localStorage.getItem('cart'));


        if (!sessionId) {
          throw new Error("inget session ID");
        }

        const response = await fetch('https://event4u.online:3005/session/verify', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId, cart: Object.values(cart), userId: sessionStorage.getItem("userId")
          })
        });

        const { paid, customerId } = await response.json();
        setOrderId(customerId);

        return paid;

      } catch (err) {
        console.log(err)
        return false;
      }
    }

    if (localStorage.getItem('session')) {
      const isVerified = verify();
      if (isVerified) {
        localStorage.removeItem("cart");
        localStorage.removeItem('session');
      } else {
        alert("Betalningen ??r avbruten. F??rs??k g??rna igen!");
      }
    }

  }, [orderId]);

  return (

    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">

          <div><BsFillCheckCircleFill className={classes.succIcon} /></div>
          <div>
            <h3 className={classes.succTitle}>Tack f??r ditt k??p!</h3>
          </div>
          <div>
            <p className={classes.succlP}>Ditt ordernummer: {orderId} </p>
          </div>
          <div className={classes.succText}>
            <p className={classes.succlP2}>L??nken till eventet hittar du bland dina tidigare ordrar.</p>
          </div>
          <div className={classes.mvhDiv}>
            <p className={classes.mvhP}>Med v??nliga h??lsningar, Event4U.</p>
          </div>

          <Link to="/userHomePage">
            <div className={classes.emailDiv}>
              <p className={classes.emailP}>G?? till startsidan</p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />

    </>

  );
}

export default SuccessPage;
