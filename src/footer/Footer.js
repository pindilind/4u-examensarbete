import React from "react";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FaUserEdit } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaDoorOpen } from 'react-icons/fa';

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value} onChange={handleChange}>

      <BottomNavigationAction
        label="Edit User"
        value="editUser"
        icon={<FaUserEdit />}
      />
      <BottomNavigationAction
        label="Orders"
        value="orders"
        icon={<FaClipboardList />}
      />
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<BsFillHouseDoorFill />}
      />
      <BottomNavigationAction 
      label="LogOut" 
      value="logout" 
      icon={<FaDoorOpen />} />
    </BottomNavigation>
  );
}