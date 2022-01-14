import React from "react";

import { Link } from "react-router-dom";

import { FaShoppingCart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import LogoSmall from '../assets/LogoSmall.svg';
import Search from '../userView/Search';
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

  const product = props.product
  
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={'header'} component="div">

            <Typography component="div">
              <Link to="/">
                <img
                  className={'logo'}
                  src={LogoSmall}
                  alt="logo"
                />
              </Link>
            </Typography>

            <Typography className={'styling'} component="div">
              <div className={'justColumn'}>
                <Search />
                {/* <h4 className={'styleGoodAfternoon'}>Good Afternoon</h4>
                <h4 className={'justMargin'}> USER</h4> */}
              </div>

              <Link to="/cartPage">
                <CartCounter counter={props.counter}/>
                {/* <FaShoppingCart className={'icon'}
                /> */}
              </Link>
              <LongMenu />

            </Typography>


            {/* <div className="purchaseIcon">

              <Link to="/login">
                <BsFillPersonFill className={'icon'}
                />
              </Link>
            </div> */}

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}