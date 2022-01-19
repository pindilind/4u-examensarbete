import React from "react";
import { Link } from "react-router-dom";

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

        <div sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "lightgreen" }} value={value} onChange={handleChange}>
            <>
                <div>
                    <p>	&#169; Event4U <br/> 
                    Tel 012-23 45 67 | Email:<a href="mailto:order@event4u.online">order@event4u.online</a>  &nbsp;</p>
                    
                </div>
                <div></div>
                <div><br/>&nbsp; &nbsp; Om Event4U | Data- och integritetspolicy | Om cookies | Våra leveransvillkor</div>
            
            </>
        </div>

    );
}