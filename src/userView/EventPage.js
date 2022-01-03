import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";
import ProductCardLarge from "../components/ProductCardLarge";

import '../App.scss';

function EventPage() {
  return (
    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <ProductCardLarge></ProductCardLarge>
          {/* <h1>EventPage</h1> */}
        </div>
      </div>

    </>
  );
}

export default EventPage;