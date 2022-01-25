import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import MakeRequest from '../MakeRequest';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";
import '../App.scss';

function UserInfo() {

  const [firstname, setFirstnameChange] = useState('');
  const handleFirstnameChange = (event) => {
    setFirstnameChange(event.target.value);
    /* setSaved(false); */
  }

  const [lastname, setLastnameChange] = useState('');
  const handleLastnameChange = (event) => {
    setLastnameChange(event.target.value);
    /* setSaved(false); */
  }

  const [phoneNumber, setPhoneNumberChange] = useState('');
  const handlePhoneNumberChange = (event) => {
    setPhoneNumberChange(event.target.value);
    /*  setSaved(false); */
  }

  const [email, setEmailChange] = useState('');
  const handleEmailChange = (event) => {
    setEmailChange(event.target.value);
    /* setSaved(false); */
  }

  const [userName, setUserNameChange] = useState('');
  const handleUserNameChange = (event) => {
    setUserNameChange(event.target.value);
    /* setSaved(false); */
  }

  const [passwordOne, setPasswordOne] = useState('');
  const handlePasswordOne = (event) => {
    setPasswordOne(event.target.value);
  };

  const [passwordTwo, setPasswordTwo] = useState('');
  const handlePasswordTwo = (event) => {
    setPasswordTwo(event.target.value);
  };

  /* const [passwordError, setPasswordError] = useState(false); */


  useEffect(() => {

    async function getUser() {

      const userId = sessionStorage.getItem("userId");
      console.log(userId)

      const status = await MakeRequest("http://localhost:3005/users?id=" + userId, "GET")
      console.log(status)

      if (status) {
        setFirstnameChange(status.firstname)
        setLastnameChange(status.lastname)
        setPhoneNumberChange(status.phoneNumber)
        setEmailChange(status.email)
        setUserNameChange(status.userName)
      }
    }

    getUser()

  }, [
    setFirstnameChange,
    setLastnameChange,
    setPhoneNumberChange,
    setEmailChange,
    setUserNameChange
  ]);


  return (
    <>
      <HeaderInlogged />

      <div className="wrappsAllContent">
        <div className="flexCenterAll ">


          <div className="customer-info">

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1.1 },
              }}
            >


              <TextField
                className="inputCustomerInfo"
                label="Firstname"
                value={firstname}
                size="small"
                onChange={handleFirstnameChange}
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}

              />
              <TextField
                className="inputCustomerInfo"
                label="Firstname"
                value={lastname}
                size="small"
                onChange={handleLastnameChange}
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}

              />

              <TextField
                label="Phonenumber"
                color="success"
                size="small"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}
              />

              <TextField
                label="Email"
                color="success"
                size="small"
                value={email}
                onChange={handleEmailChange}
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}
              />

              <TextField
                color="success"
                disabled
                size="small"
                label="Username"
                value={userName}
                onChange={handleUserNameChange}
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}
              />

              <TextField
                label="Password"
                size="small"
                color="success"
                id="passwordInputOne"
                type="password"
                value={passwordOne}
                onChange={handlePasswordOne}
                autoComplete="current-password"
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}
              />

              <TextField
                label="Password"
                size="small"
                color="success"
                id="passwordInputTwo"
                type="password"
                value={passwordTwo}
                onChange={handlePasswordTwo}
                autoComplete="current-password"
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}
              />



              <div className="formControllTwo">

              </div>
            </Box>


            <div className="btnDiv">
              <div>

                <Button
                  /* onClick={} */
                  size="small"
                  color="success"
                  variant="contained"
                  disableElevation>
                  Save
                </Button>

              </div>
              <div>

                <Button
                  /*  onClick={} */
                  color="error"
                  variant="contained"
                  disableElevation
                  size="small">
                  Delete User
                </Button>

              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>

  );
}

export default UserInfo;