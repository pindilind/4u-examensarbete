import React from "react";

import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import Bakgrund from "../assets/bakgrund.png"
import "./StyleStartPage.scss";

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
          <div className={"centeredText"}> Vi erbjuder digitala föreläsningar <br />​-  i realtid eller inspelade - <br /> ​för att Underhålla, Utveckla, Utbilda och Umgås.​</div>


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
    </>
  );
}

export default StartPage;