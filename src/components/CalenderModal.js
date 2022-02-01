import React from 'react';

import { BsCalendar2DateFill } from 'react-icons/bs';

import Modal from '@mui/material/Modal';
import Calender from './Calender';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,

  '@media (max-width: 480px)': {
    width: '90%'
  }

};

export default function KeepMountedModal() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="btnStylingGeneralKalender">
        {/* <BsCalendar2DateFill />  */}Kalender
      </button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Calender />
      </Modal>
    </>
  );
}