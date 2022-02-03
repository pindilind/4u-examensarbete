import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import '../App2.scss';
import './CreateLoginUserInfoStyling.scss';

import MakeRequest from '../MakeRequest';

import HeaderLogga from "../headers/HeaderLogga";

function Login() {

  const [userId, setUserId] = useState(null);

  const [userName, setUserName] = useState('');
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [error, setError] = useState(false);

  async function signIn() {
    const status = await MakeRequest(
      "https://event4u.online:3005/users/login",
      "POST",
      { userName, password }
    );
    

    if (status.customerLogin === true) {

      sessionStorage.setItem("userId", status.user.id);
      sessionStorage.setItem("userName", status.user.userName);
      setUserId(status.user.id)

    } else {
      setError(true);
    }
  }

  if (userId) {
    return <Redirect to="/userHomePage" />
  };

  return (
    <>
      <HeaderLogga />
      <div className="wrappsAllContentLogAndReg">
        <div className="flexCenterAllLogAndReg">

          <div className="displayFlexDiv">
            <h1 className="titleCreateAndLogin">Logga in</h1>

            <p style={{ margin: 0 }}>Har du inget konto? <Link className="registerLink" to="/createAccount">Registera här</Link></p>
            <p style={{
              color: "red",
              marginTop: 0,
              visibility: error ? "visible" : "hidden"
            }}>
              Fel användarnamn/lösenord
            </p>

            <div className="formDiv">

              <div>
                <TextField
                  label="Användarnamn"
                  value={userName}
                  onChange={handleUserNameChange}
                  size="small"
                  color="success"
                />
              </div>

              <div style={{ marginTop: 10 }}>
                <TextField
                  type="password"
                  id="passwordInput"
                  label="Lösenord"
                  value={password}
                  onChange={handlePasswordChange}
                  size="small"
                  color="success"
                />
              </div>

              <Typography gutterBottom variant="p">

              </Typography>
              <div className="formControll">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Visa lösenord" />
              </div>

            </div >

            <button
              onClick={signIn}
              className="btnStylingGeneral">
              Logga in
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
