import React from "react";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import NewLogo from "../assets/newLogo.svg";
import Search from '../userView/Search';
import LongMenu from '../components/DropDownTest';

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
              <LongMenu id="colorIcons" />
            </div>

            <div className={'divTwo'}>
              <img
                className={'logo'}
                src={NewLogo}
                alt="logo"
              />
            </div>


            {/* <div className={'searchDiv'}>
                <Search />
              </div> */}

            <div className={'counterDiv'}>
              <Link product={product} counter={props.counter} to="/cartPage">
                <CartCounter counter={props.counter} />
              </Link>
            </div>

          </div>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
