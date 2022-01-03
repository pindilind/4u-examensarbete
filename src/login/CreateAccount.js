import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../App2.scss';

import HeaderLogga from '../headers/HeaderLogga';

function CreateAccount() {
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
                /* value={firstName}
                onChange={} */
                size="small"
              />

              <TextField
                label="Lastname"
                color="success"
                /* value={lastName}
                onChange={} */
                size="small"
              />

              <TextField
                label="Phonenumber"
                /* value={phoneNumber}
                onChange={} */
                size="small"
                color="success"
              />

              <TextField
                label="Email"
                /* value={email} */
                /* onChange={} */
                size="small"
                color="success"
              />

              <TextField
                label="Username"
                /* value={userName} */
                /* onChange={} */
                size="small"
                color="success"
              />

              <TextField
                label="Password"
                /* value={passwordOne} */
                /* onChange={} */
                size="small"
                color="success"
              />

              <TextField
                label="Password"
                /* value={passwordTwo} */
                /* onChange={} */
                size="small"
                color="success"
              />

            </Box>


            <Button
              /* onClick={} */
              size="small"
              color="success"
              variant="contained"
              disableElevation>
              Create Account
            </Button>
          </>

        </div>
      </div>
    </>
  );
}

export default CreateAccount;