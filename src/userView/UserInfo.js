import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

function UserInfo() {
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
                /* value={firstName} */
                size="small"
                /* onChange={} */
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}

              />

              <TextField
                label="Phonenumber"
                color="success"
                size="small"
                /* value={phoneNumber}
                onChange={} */
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}
              />

              <TextField
                label="Email"
                color="success"
                size="small"
                /* value={email} */
                /* onChange={} */
                sx={{
                  '& > :not(style)': { width: '17rem' }
                }}
              />

              <TextField
                color="success"
                disabled
                size="small"
                label="Username"
                /* value={} */
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
                /* value={passwordOne} */
                /* onChange={} */
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
                /* value={passwordTwo} */
                /* onChange={} */
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