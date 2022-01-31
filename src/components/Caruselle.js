import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import CaruselleMorgan from '../assets/moggeSvg.svg';
import CaruselleTina from '../assets/tinaSvg.svg';

import { makeStyles } from '@mui/styles';

const useStylesLarge = makeStyles({
  caruselleWrapDiv: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caruselleDiv: {
    display: 'flex',
    width: '90%',
    justifyContent: 'center',

    '@media (max-width: 480px)': {
      width: '90%',
    }
  },
  caruselleImg: {
    width: '100%',
  }

});

export default function App() {

  const classes = useStylesLarge();
  return (

    <div className={classes.caruselleWrapDiv}>
      <Carousel className={classes.caruselleDiv}>
        <Carousel.Item interval={2500}>
          <img
            className={classes.caruselleImg}
            src={CaruselleMorgan}
            alt="logo"
          />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className={classes.caruselleImg}
            src={CaruselleTina}
            alt="logo"
          />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className={classes.caruselleImg}
            src={CaruselleMorgan}
            alt="logo"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

