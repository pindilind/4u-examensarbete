import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

function UserHomePage() {
  return (
    <>
      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h1>userHomePage</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserHomePage;