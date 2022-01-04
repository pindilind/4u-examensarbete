import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";

import ProductCardSmall from "../components/ProductCardSmall";
import KeepMountedModal from "../components/ProductModal";
import Footer from "../footer/Footer";
import Search from './Search';
import Calender from "./Calender";
import LongMenu from "../components/DropDpwn";
import Avatar from "../components/Avatar";
import './UserHomeStyle.scss';

function UserHomePage() {
  return (
    <>
      <HeaderInlogged />
          
      <div className={"wrappsAllContent"}>
        <div className={"flexCenterAll"}>
          <Avatar />
          
          <KeepMountedModal />
          <KeepMountedModal />
          <KeepMountedModal />    

          {/* <ProductCardSmall /> */}

          <Calender />
          <div className={"longAndSearchDiv"}>
            <div><LongMenu /></div>
            <div><Search /></div>
          </div>

          <div className={"scrolling-wrapper-flexbox"}>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserHomePage;
