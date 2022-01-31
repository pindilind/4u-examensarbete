import React from "react";
import { Link } from "react-router-dom";

import ModalAboutUs from '../components/AboutUs';
import DataIntegritetsPolicy from '../components/DataIntegritetsPolicy';
import CookieInfo from "../components/CookieInfo";

export default function Footer() {
  
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (




    <div> &#169; Event4U | Tel 012-23 45 67 | Email: <a href=" mailto:order@event4u.online"> order@event4u.online</a>  &nbsp; |

      <ModalAboutUs /> | <DataIntegritetsPolicy /> | <CookieInfo />
    </div>

  );

}