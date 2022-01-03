import React from "react";

import { Link, Redirect } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import '../App2.scss';

import HeaderLogga from "../headers/HeaderLogga";

function Login() {
  return (
    <>
      <HeaderLogga />
      <div className="wrappsAllContentLogAndReg">
        <div className="flexCenterAllLogAndReg">

          <h1 className="titleCreateAndLogin">Sign In</h1>
          <p style={{ margin: 0 }}>No Account? <Link to="/createAccount">Register HERE!</Link></p>


          <div className="formDiv">

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '100%' },
              }}
            >

              <TextField
                color="success"
                label="UserName"
                /* value={userName}
                onChange={} */
                size="small"
              />

              <TextField
                color="success"
                type="password"
                id="passwordInput"
                label="Password"
                /* value={password} */
                /*  onChange={} */
                size="small"
              />

              <Typography gutterBottom variant="p">

              </Typography>
              <div className="formControll">
                <FormControlLabel
                  /* onClick={} */
                  control={<Checkbox />}
                  label="Show password" />
              </div>

            </Box>

          </div >

          <Button
            /*  onClick={signIn} */
            size="small"
            color="success"
            variant="contained"
            disableElevation>
            Sign In
          </Button>

        </div>
      </div>
    </>
  );
}

export default Login;
