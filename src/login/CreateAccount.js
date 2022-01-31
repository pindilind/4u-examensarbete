import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

import TextField from '@mui/material/TextField';

import '../App2.scss';
import './CreateLoginUserInfoStyling.scss';

import MakeRequest from '../MakeRequest';

import HeaderLogga from '../headers/HeaderLogga';

function CreateAccount(props) {

  const [redirect, setRedirect] = useState(false);

  const [firstname, setFirstname] = useState('');
  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const [lastname, setLastname] = useState('');
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [userName, setUserName] = useState('');
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const [passwordOne, setPasswordOne] = useState('');
  const handlePasswordOne = (event) => {
    setPasswordOne(event.target.value);
  };

  const [passwordTwo, setPasswordTwo] = useState('');
  const handlePasswordTwo = (event) => {
    setPasswordTwo(event.target.value);
  };

  /* const [passwordError, setPasswordError] = useState(false); */

  async function createAccount(props) {

    /* if (passwordOne === passwordTwo) { 
 
       setPasswordError(false);  */

    const status = await MakeRequest(
      "http://localhost:3005/users/create",
      "POST",
      { firstname, lastname, userName, phoneNumber, email, password: passwordOne }
    );
    console.log(status)

    if (status.customerCreated === true) {
      setRedirect(true);
    } /* else { */
    /* setUserAvailable(false); */
    /*    } */

    //} else {
    /* setPasswordError(true); */
    /* } */
  }

  if (redirect === true) {
    return <Redirect to="/login" />;
  }

  return (

    <>
      <HeaderLogga />
      <div className="wrappsAllContentLogAndReg">
        <div className="flexCenterAllLogAndReg">

          <div className="displayFlexDiv">
            <h1 className="titleRegisterAndLogin">Skapa konto</h1>

            <div className="formDiv">

              <div style={{ marginTop: 10 }}>
                <TextField
                  label="Förnamn"
                  color="success"
                  value={firstname}
                  onChange={handleFirstnameChange}
                  size="small"
                />
              </div>

              <div style={{ marginTop: 10 }}>
              <TextField
                label="Efternamn"
                color="success"
                value={lastname}
                onChange={handleLastnameChange}
                size="small"
              />
            </div>

            <div style={{ marginTop: 10 }}>
              <TextField
                label="Telefonnummer"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                size="small"
                color="success"
              />
            </div>

            <div style={{ marginTop: 10 }}>
              <TextField
                label="Email"
                value={email}
                onChange={handleEmailChange}
                size="small"
                color="success"
              />
            </div>

            <div style={{ marginTop: 10 }}>
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
                label="Lösenord"
                value={passwordOne}
                onChange={handlePasswordOne}
                size="small"
                color="success"
              />
            </div>

            <div style={{ marginTop: 10 }}>
              <TextField
                label="Lösenord"
                value={passwordTwo}
                onChange={handlePasswordTwo}
                size="small"
                color="success"
              />
            </div>

          </div>

          <button
            onClick={createAccount}
            className="btnStylingGeneral"
            disableElevation>
            Skapa konto
          </button>

        </div>
      </div>
    </div>
    </>
  );
}

export default CreateAccount;
