import React from "react";
import VideoPlayer from "react-background-video-player";
import { Link } from "react-router-dom";

import { makeStyles } from '@mui/styles';

import PexelsVideo from "../assets/pexels-mikael-blomkvist-6561453.mp4";
import ModalAboutUs from "../components/AboutUs";
import CookieInfo from "../components/CookieInfo";

import NewLogo from "../assets/newLogo.svg";

import "./StyleStartPage.scss";
import DataIntegritetsPolicy from "../components/DataIntegritetsPolicy";
import ModalVillkor from "../components/Villkor";

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
    Ofilter: 'blur(15px)',
    filter: 'blur(15px)',

    '@media (max-width: 780px)': {
      width: '100vh',
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

            <div>
              <img className={"imgTestStyle"}
                src={NewLogo}
                alt="logoTest"
              />
            </div>

            <div className={"centeredText"}> Vi erbjuder digitala föreläsningar <br />​-  i realtid eller inspelade - <br /> ​för att Underhålla, Utveckla, Utbilda och Umgås.​ </div>
            <div className={"centeredText"}>
              Skapa ett konto och se hela vårt utbud direkt, eller börja med att läsa lite mer här <ModalAboutUs />
            </div>
            <div>
            </div>

            <div className={"centeredBtn"}>
              <Link underline="none" to="/login">
                <p className={classes.btnStyle}>
                  Klicka här för att börja utvecklas!
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className={"footerStyleStartPage"}>
          <div className={"pStyleStartPage"}>
            &#169; Event4U | Tel 0705-69 40 64 | Email: <a href=" mailto:order@event4u.online " > order@event4u.online</a> | <ModalAboutUs /> | <CookieInfo /> | <DataIntegritetsPolicy /> | <ModalVillkor />
          </div>
        </div>
      </div>

    </>
  );
}

export default StartPage;
