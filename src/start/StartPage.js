import React from "react";
import VideoPlayer from "react-background-video-player";
import { Link } from "react-router-dom";

import { makeStyles } from '@mui/styles';

import PexelsVideo from "../assets/pexels-mikael-blomkvist-6561453.mp4";
import ModalAboutUs from "../components/AboutUs";
import FooterStartPage from "../footer/FooterStartPage"
import CookieInfo from "../components/CookieInfo";
/* import LogoTest from "../assets/LogoTest.svg"; */
import NewLogo from "../assets/newLogo.svg";

import "./StyleStartPage.scss";
import DataIntegritetsPolicy from "../components/DataIntegritetsPolicy";

const useStyles = makeStyles({
  btnStyle: {
    color: '#ffffff',

    '@media (max-width: 480px)': {

    }
  },
  video: {
    height: '100vw',
    width: '100vh',
    margin: 'auto',
    overflow: 'hidden',

    '@media (max-width: 780px)': {
      width: '100%',
      objectFit: 'cover',
    }
  },

});

function StartPage() {

  const classes = useStyles();

  return (

    <>
      <div className={"bg"}>

        <VideoPlayer
          className={classes.video}
          src={PexelsVideo}
          autoPlay={true}
          muted={true}
        />

        <div className={"board"}>
          <div className={"centered"}>

            <img className={"imgTestStyle"}
              src={NewLogo}
              alt="logoTest"
            />

          </div>
          {/*  <div className={"centeredText"}> Vi erbjuder digitala föreläsningar <br />​-  i realtid eller inspelade - <br /> ​för att Underhålla, Utveckla, Utbilda och Umgås.​ </div>
          <div className={"centeredText"}>
            Skapa ett konto och se hela vårt utbud direkt, eller börja med att läsa lite mer här <ModalAboutUs />
          </div>
          <div>
          </div> */}

          <div className={"centeredBtn"}>
            <Link underline="none" to="/login">
              <p className={classes.btnStyle}>
                Klicka här för att börja utvecklas!
              </p>
            </Link>
          </div>
        </div>

        <div className={"footerStyleStartPage"}>
          <div className={"pStyleStartPage"}>
            {/* <FooterStartPage /> */}
            &#169; Event4U | Tel 012-23 45 67 | Email: <a href= " mailto:order@event4u.online " > order@event4u.online</a> | <ModalAboutUs /> | <CookieInfo /> | <DataIntegritetsPolicy /> 
          </div>
        </div>
      </div>

    </>
  );
}

export default StartPage;
