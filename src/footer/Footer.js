import React from "react";
import { Link } from "react-router-dom";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FaUserEdit } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaDoorOpen } from 'react-icons/fa';

export default function FooterStartPage() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<>
    <BottomNavigation
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      value={value} onChange={handleChange}
    >

      <BottomNavigationAction
        component={Link}
        to="/userInfo"
        value="editUser"
        icon={<FaUserEdit />}
      />
      <BottomNavigationAction
        component={Link}
        to="/orderPage"
        value="orders"
        icon={<FaClipboardList />}
      />
      <BottomNavigationAction
        component={Link}
        to="/userHomePage"
        value="home"
        icon={<BsFillHouseDoorFill />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        value="logout"
        icon={<FaDoorOpen />} />
    </BottomNavigation>

    <div>
      Helloo
    </div>

    </>
  );
}