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

    return orderArray.map((order) => {
      console.log(order)
      let cart = order.cart;
      console.log(cart)

      return cart.map((cart) => {

        return (
    
            <tr key={cart.productTitle} style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <td>{order.customerId}</td>
              <td>{cart.productTitle}</td>
              <td>{cart.date}</td>
              <td>{cart.time}</td>
              <td>{cart.link}</td>

              {/* <tr>
            <td>{orders.orderDate}</td>
            <td>Betald</td>
            <td>{cart.quantity}</td>
            <td>{cart.price}</td>
            <td>{cart.quantity * cart.price}</td>
          </tr> */}
            </tr>
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


          <div classes="orderTable">
            <table >
              <thead style={{
                width: "100%",
                outerHeight: "8em",
                display: "flex",
                justifyContent: "space-around",
                padding: "1em",
                alignItems: "center",
                backgroundColor: '#75A488',
                color: '#ffffff',
                fontWeight: 'bold',

              }}>

                <tr style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between"
                }}>
                  <th>Ordernummer </th>
                  <th>Event titel</th>
                  <th>Event datum</th>
                  <th>Event starttid</th>
                  <th>Länk till event</th>
                </tr>

                {/* <tr>
                  <th>Orderdatum</th>
                  <th>Orderstatus</th>
                  <th>Antal</th>
                  <th>Pris</th>
                  <th>Total, s:a</th>
                </tr>  */}

              </thead>

              <tbody>
                {renderOrder()}
              </tbody>

            </table>
          </div>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default OrderPage;
