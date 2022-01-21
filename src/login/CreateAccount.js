import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../App2.scss';

import MakeRequest from '../MakeRequest';

import HeaderLogga from '../headers/HeaderLogga';

function CreateAccount() {

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

  async function createAccount() {

   /*  if (passwordOne === passwordTwo) { */

      /* setPasswordError(false); */

      const status = await MakeRequest(
        "http://localhost:3005/users/create",
        "POST",
        { firstname, lastname, userName, phoneNumber, email, password: passwordOne }
      );
      console.log(status)

     /*  if (status.customerCreated === true) {
        setRedirect(true);
      } else {
        /* setUserAvailable(false); */
   /*    } */

    //} else {
      /* setPasswordError(true); */
    /* } */
  }

  return (

    <>
      <HeaderLogga />
      <div className="wrappsAllContentLogAndReg">
        <div className="flexCenterAllLogAndReg">
          <>
            <h1 className="titleRegisterAndLogin">Create Your Account</h1>

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >

              <TextField
                label="Firstname"
                color="success"
                value={firstname}
                onChange={handleFirstnameChange}
                size="small"
              />

              <TextField
                label="Lastname"
                color="success"
                value={lastname}
                onChange={handleLastnameChange}
                size="small"
              />

              <TextField
                label="Phonenumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                size="small"
                color="success"
              />

              <TextField
                label="Email"
                value={email}
                onChange={handleEmailChange}
                size="small"
                color="success"
              />

              <TextField
                label="Username"
                value={userName}
                onChange={handleUserNameChange}
                size="small"
                color="success"
              />

              <TextField
                label="Password"
                value={passwordOne}
                onChange={handlePasswordOne}
                size="small"
                color="success"
              />

              <TextField
                label="Password"
                value={passwordTwo}
                onChange={handlePasswordTwo}
                size="small"
                color="success"
              />

            </Box>
            
            <Button
              onClick={createAccount}
              size="small"
              color="success"
              variant="contained"
              disableElevation>
              Skapa konto
            </Button>
          </>

        </div>
      </div>
    </>
  );
}

export default CreateAccount;