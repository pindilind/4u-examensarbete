import React from "react";

import HeaderInlogged from "../headers/HeaderInlogged";

import ProductCardLarge from "../components/ProductCardLarge";


import Footer from "../footer/Footer";
import '../App.scss';

function EventPage() {
  return (
    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
      <ProductCardLarge />
         
          <h1>EventPage</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;
