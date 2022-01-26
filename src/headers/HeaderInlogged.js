import React from "react";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import LogoUtanText from '../assets/LogoUtanText.svg';
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
          <Toolbar className={'header'} component="div">

            <Typography component="div">
              <Link to="/">
                <img
                  className={'logo'}
                  src={LogoUtanText}
                  alt="logo"
                />
              </Link>
            </Typography>

            <Typography className={'styling'} component="div">
              {/* <div className={'justFlex'}>
                Hej och välkommen!
              </div> */}

              <div className={'justColumn'}>
                <Search />
              </div>

              <div className={'justFlex'}>
                <Link product={product} counter={props.counter} to="/cartPage">
                  <CartCounter counter={props.counter} />
                </Link>

                <LongMenu id="colorIcons" />
              </div>

            </Typography>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
