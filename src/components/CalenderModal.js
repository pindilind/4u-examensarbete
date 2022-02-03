import React from 'react';

import { BsCalendar2DateFill } from 'react-icons/bs';

import Modal from '@mui/material/Modal';
import Calender from './Calender';

export default function KeepMountedModal() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="btnStylingGeneralKalender">
        {/* <BsCalendar2DateFill />  */} Kalender
      </button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <><Calender /></>
      </Modal>
    </>
  );
}