import React from "react";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import ModalAboutUs from "../components/AboutUs";
import CookieInfo from "../components/CookieInfo";
import DataIntegritetsPolicy from "../components/DataIntegritetsPolicy";
import ModalVillkor from "../components/Villkor";

import NewLogo from "../assets/newLogo.svg";
import LongMenu from '../components/DropDown';

import CartCounter from '../components/CartCounter';

import './HeaderInloggStyle.scss';
function ElevationScroll(props) {

  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function ElevateAppBar(props) {

  const product = props.product;

  return (

    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <div className={'header'}>

            <div className={'divOne'}>
              <LongMenu product={product} id="colorIcons" />
            </div>


            <Link to="/userHomePage">
              <div className={'divTwo'}>
                <img
                  className={'logo'}
                  src={NewLogo}
                  alt="logo"
                />
              </div>
            </Link>

            <div className={'counterDiv'}>
              <Link product={product} counter={props.counter} to="/cartPage">
                <CartCounter counter={props.counter} />
              </Link>
            </div>

          </div>
          <div style={{
            background: '#75A488',
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            color: '#ffff',
            fontSize: '0.68rem',
          }}><ModalAboutUs /> | <CookieInfo /> | <DataIntegritetsPolicy /> | <ModalVillkor /></div>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
