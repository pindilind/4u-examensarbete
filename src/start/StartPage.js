import React from "react";

import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import Bakgrund from "../assets/bakgrund.png"
import "./StyleStartPage.scss";
import AboutUs from "../components/AboutUs";
import Footer from "../footer/FooterStartPage"

const useStyles = makeStyles({
  btnStyle: {
    backgroundColor: '#75A488',
    color: '#ffffff',

    '@media (max-width: 480px)': {
      minWidth: 300,
    }
  },
});

function StartPage() {

  const classes = useStyles();

  return (

    <>
      <div className={"bg"}>
        <div className={"board"}>
          <div className={"centered"}>Välkommen till Event 4U!</div>
          <div className={"centeredText"}> Vi erbjuder digitala föreläsningar <br />​-  i realtid eller inspelade - <br /> ​för att Underhålla, Utveckla, Utbilda och Umgås.​ <br /> Skapa ett konto och se hela vårt utbud, eller läs lite mer om oss <a href="">här!</a> <br /></div>
          <div>
            {/* <AboutUs /> */}
          </div>

          <div className={"centeredBtn"}>
            <Button
              className={classes.btnStyle}
              /* onClick={} */
              size="small"
              variant="contained"
              disableElevation>
              Börja utvecklas!
            </Button>
          </div>
        </div>
      </div>
      <footer>
        < Footer />
      </footer>
    </>
  );
}

export default StartPage;