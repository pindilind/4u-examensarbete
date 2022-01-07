import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";

import ProductCardSmall from "../components/ProductCardSmall";
import KeepMountedModal from "../components/ProductModal";
import CalenderModal from '../components/CalenderModal';
import Caruselle from '../components/Caruselle';
import '../App.scss';


import Footer from "../footer/Footer";
import Search from './Search';
import LongMenu from "../components/DropDown";
import Avatar from "../components/Avatar";
import './UserHomeStyle.scss';


function UserHomePage() {
  return (
    <>
      <HeaderInlogged />
      <div className={"wrappsAllContent"}>
        <div className={"flexCenterAll"}>

        <div className={"avatarUser"}>
        <Avatar />
        <div>
          <h3>Good Afternoon</h3>
          <h3>USER</h3>
        </div>
          </div>

          <div className={"longAndSearchDiv"}>
            {/* <LongMenu /> */}
            {/* <Search /> */}
          </div>
          <Caruselle />

          {/* <div className={"scrolling-wrapper-flexbox"}>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
          </div> */}

          <CalenderModal />

          <KeepMountedModal />
          <KeepMountedModal />
          <KeepMountedModal />

          {/* <ProductCardSmall /> */}

        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserHomePage;
