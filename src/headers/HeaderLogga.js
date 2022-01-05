import React from "react";

import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

import Logo from '../assets/Logo.svg';

const useStyles = makeStyles({
  headerLogga: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  logoStyling: {
    marginTop: '1rem',
    marginBottom: '0.5rem'
  }
});

function HeaderLogga() {
  const classes = useStyles()

  return (

    <Typography className={classes.headerLogga} component="div">
      <img
        className={classes.logoStyling}
        src={Logo}
        alt="logo" />
    </Typography>

  );
}

export default HeaderLogga;