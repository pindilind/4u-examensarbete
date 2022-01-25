import React, { setState, useEffect, useState } from "react";

import Typography from '@mui/material/Typography';

import HeaderInlogged from "../headers/HeaderInlogged";
import OrderTable from "../components/OrderTable";
import Footer from "../footer/Footer";

import MakeRequest from "../MakeRequest";

import "../App.scss";
import "./CartPageStyle.scss";



function OrderPage() {

  const [orders, setOrders] = useState([]);
    
    useEffect(() => {
      async function getOrders(props) {
        
        const status = await MakeRequest("http://localhost:3005/orders", "GET");
                
        return status
      }
      getOrders().then(result => {
        setOrders(result);       
      });
      
    }, [setOrders]);

    console.log(orders)
    

  return (

    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h1>Dina Ordrar</h1>

          <Typography className={'orderDiv'} component="div">
              <OrderTable />
          </Typography>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default OrderPage;