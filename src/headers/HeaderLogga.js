import React from "react";

import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

import NewLogo from '../assets/newLogo.svg';

const useStyles = makeStyles({
  headerLogga: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  logoStyling: {
    marginTop: '1rem',
    marginBottom: '0.5rem',
    width: '17rem'
  }
});

function HeaderLogga() {
  const classes = useStyles()

  return (

    <Typography className={classes.headerLogga} component="div">
      <img
        className={classes.logoStyling}
        src={NewLogo}
        alt="logo" />
    </Typography>

  );
}

export default HeaderLogga;
