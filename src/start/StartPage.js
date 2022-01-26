import React from "react";
import VideoPlayer from "react-background-video-player";

import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import Bakgrund from "../assets/bakgrund.png"
import "./StyleStartPage.scss";
import ModalAboutUs from "../components/AboutUs";
import Footer from "../footer/FooterStartPage"
import LogoTest from "../assets/LogoTest.svg";

import PexelsGustavoFring from "../assets/production ID_4496002.mp4";

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
      <VideoPlayer
        className="video"
        src={PexelsGustavoFring}
        autoPlay={true}
        muted={true}
      />

        <div className={"board"}>
          <div className={"centered"}>
        
          <img className={"imgTestStyle"}
          src={LogoTest}
          alt="logoTest"
        />
      
          </div>
          <div marginTop="20em"><h2>Välkommen till Event 4U!</h2></div>
          <div className={"centeredText"}> Vi erbjuder digitala föreläsningar <br />​-  i realtid eller inspelade - <br /> ​för att Underhålla, Utveckla, Utbilda och Umgås.​ </div>
          <div>
            Skapa ett konto och se hela vårt utbud direkt, eller börja med att läsa lite mer här <ModalAboutUs />
           
          </div> 
          <div>
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
