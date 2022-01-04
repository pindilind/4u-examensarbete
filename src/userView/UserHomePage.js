import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";

import ProductCardSmall from "../components/ProductCardSmall";
import KeepMountedModal from "../components/ProductModal";
import Footer from "../footer/Footer";


function UserHomePage() {
  return (
    <>
      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          {/* <ProductCardSmall /> */}
          <KeepMountedModal />
          <KeepMountedModal />
          <KeepMountedModal />    
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserHomePage;