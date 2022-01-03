import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";
import ProductCardSmall from "../components/ProductCardSmall";

function UserHomePage() {
  return (
    <>
      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <ProductCardSmall />
          
          
        </div>
      </div>
      
    </>
  );
}

export default UserHomePage;