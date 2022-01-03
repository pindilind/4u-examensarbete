import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";

import ProductCardSmall from "../components/ProductCardSmall";

import Footer from "../footer/Footer";


function UserHomePage() {
  return (
    <>
      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <ProductCardSmall />
          
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserHomePage;