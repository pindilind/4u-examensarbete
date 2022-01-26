import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import "../App.scss";

import { makeStyles } from '@mui/styles';

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


function CancelPage() {

  const classes = useStyles()


  return (

    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">

          <div>
            <h3 className={classes.cancelTitle}>Din beställning gick inte att genomföra.</h3>
            <p className={classes.cancelP}>Det verkar som att köptet inte gick att genomföra. Kontakta oss, eller försök igen.</p>
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

export default CancelPage;
