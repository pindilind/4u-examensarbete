import React, { useEffect, useState } from "react";

import Typography from '@mui/material/Typography';

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";

import MakeRequest from "../MakeRequest";

import "../App.scss";
import "./CartPageStyle.scss";



function OrderPage(props) {

  const [orders, setOrders] = useState([]);

  console.log(orders)
  console.log(orders.cart)


  useEffect(() => {
    async function getOrders() {

      const status = await MakeRequest("http://localhost:3005/orders", "GET");

      return status
    }
    getOrders().then(result => {
      setOrders(result);
    });

  }, [setOrders]);

  console.log(orders);

  function renderOrder() {

    let orderArray = (Object.values(orders))
    console.log(orderArray)

    return orderArray.map((orders) => {
      let cart = JSON.parse(orders.cart);
      console.log(orders)
      
      return cart.map((cart) => {
        console.log(cart)
        /* let cart = JSON.parse(orders.cart);
        console.log(JSON.parse(orders.cart)); */
      
      return (
        <>
          <tr>
            <td>{orders.customerId}</td>
            <td>{cart.productTitle}</td>
            <td>{cart.date}</td>
            <td>{cart.time}</td>
            <td>{cart.link}</td>
          </tr>

          <tr>
            <td>{orders.orderDate}</td>
            <td>Betald</td>
            <td>{cart.quantity}</td>
            <td>{cart.price}</td>
            <td>{cart.quantity * cart.price}</td>
          </tr>
        </>
      
      );
    });
    });
  }

  return (
    <>

      <HeaderInlogged />
      <div className="wrappsAllContent">
        <div className="flexCenterAll ">
          <h1>Dina Ordrar</h1>

          <Typography className={'orderDiv'} component="div">
            <div classes="orderTable">
              <table>
                <tr>
                  <th>Ordernummer </th>
                  <th>Event titel</th>
                  <th>Event datum</th>
                  <th>Event starttid</th>
                  <th>Länk till event</th>
                </tr>
                {renderOrder()}
                <tr>
                  <th>Orderdatum</th>
                  <th>Orderstatus</th>
                  <th>Antal</th>
                  <th>Pris</th>
                  <th>Total, s:a</th>
                </tr>

              </table>
            </div>

            {/* <OrderTable /> */}
          </Typography>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default OrderPage;
