import React, { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';

import MakeRequest from '../MakeRequest';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import '../App.scss';
import '../login/CreateLoginUserInfoStyling.scss';
import './UserHomeStyle.scss';

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

      const status = await MakeRequest("https://event4u.online/users?id=" + userId, "GET")

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

          <div className="displayFlexDiv">
            <h1 className="titleRegisterAndLogin">Din information</h1>

            <div className="formDiv">

              <div style={{ marginTop: 10 }}>
                <TextField
                  className="inputCustomerInfo"
                  label="Förnamn"
                  value={firstname}
                  size="small"
                  onChange={handleFirstnameChange}
                />
              </div>

              <div style={{ marginTop: 10 }}>
                <TextField
                  className="inputCustomerInfo"
                  label="Efternamn"
                  value={lastname}
                  size="small"
                  onChange={handleLastnameChange}
                />
              </div>

              <div style={{ marginTop: 10 }}>
                <TextField
                  label="Telefonnummer"
                  color="success"
                  size="small"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>

              <div style={{ marginTop: 10 }}></div>
              <TextField
                label="Email"
                color="success"
                size="small"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div style={{ marginTop: 10 }}>
              <TextField
                color="success"
                disabled
                size="small"
                label="Användarnamn"
                value={userName}
                onChange={handleUserNameChange}
              />
            </div>

            <div style={{ marginTop: 10 }}>
              <TextField
                label="Lösenord"
                size="small"
                color="success"
                id="passwordInputOne"
                type="password"
                value={passwordOne}
                onChange={handlePasswordOne}
                autoComplete="current-password"
              />
            </div>

            <div style={{ marginTop: 10 }}>
              <TextField
                label="Lösenord"
                size="small"
                color="success"
                id="passwordInputTwo"
                type="password"
                value={passwordTwo}
                onChange={handlePasswordTwo}
                autoComplete="current-password"
              />
            </div>


            <div className="btnDiv">
              <div>

                <button
                  className="btnStylingUserInfo"
                  /* onClick={} */
                  size="small"
                  variant="contained">
                  Spara
                </button>

              </div>

              <div>

                <button
                  className="btnStylingDelete"
                  size="small">
                  Radera användare
                </button>

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
