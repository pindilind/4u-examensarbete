import React from 'react';
import { Link, Redirect } from "react-router-dom";
/* import { useDispatch, useSelector } from 'react-redux'; */
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import '../App2.scss';

import MakeRequest from '../MakeRequest';

import HeaderLogga from "../headers/HeaderLogga";

function Login(props) {

  const [userId, setUserId] = useState(null);

  const [userName, setUserName] = useState('');
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function signIn() {
    const status = await MakeRequest(
      "http://localhost:3005/users/login",
      "POST",
      { userName, password }
    );
    console.log(status)

    if (status.customerLogin === true) {

      sessionStorage.setItem("userId", status.user.id);
      setUserId(status.user.id)

    } else {
      /*  setError(true); */
    }
  }

  /* REDIRECT INTE FÄRDIG */

  if (userId) {
    return <Redirect to="/userHomePage" />
  };

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
                value={userName}
                onChange={handleUserNameChange}
                size="small"
              />

              <TextField
                color="success"
                type="password"
                id="passwordInput"
                label="Password"
                value={password}
                onChange={handlePasswordChange}
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
            onClick={signIn}
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
