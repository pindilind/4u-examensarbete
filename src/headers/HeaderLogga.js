import React from "react";

import { Typography } from "@mui/material";

import './HeaderLogga.scss'
import Logo from '../assets/Logo.svg';

function HeaderLogga() {
  return (

    <Typography className={'headerLogga'} variant="h2">
   <img  
   src={Logo} 
   alt="logo"/>
  </Typography>

  );
}

export default HeaderLogga;