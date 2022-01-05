import React from 'react';

import { BsCalendar2DateFill } from 'react-icons/bs';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Calender from './Calender';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,

  '@media (max-width: 480px)' : {
    minWidth: 300,
  }

};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Kalender <BsCalendar2DateFill/></Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Calender />
          <Button onClick={handleClose} >Close</Button>
        </Box>
      </Modal>
    </div>
  );
}