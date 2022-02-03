import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeaderInlogged from "../headers/HeaderInlogged";
import Footer from "../footer/Footer";
import MakeRequest from "../MakeRequest";

import "../App.scss";
import "./CartPageStyle.scss";


function OrderPage(props) {

  const [orders, setOrders] = useState([]);


  useEffect(() => {

    async function getOrders() {

      const status = await MakeRequest("http://localhost:3005/orders", "GET");
      setOrders(status);
      return status

    }

    getOrders();

  }, [setOrders]);


  function renderOrder() {

    let orderArray = (Object.values(orders))

    return orderArray.map((order) => {
      console.log(order)

      let cart = order.cart;

      console.log(cart)

      return cart.map((cart) => {

        return (

          <div key={cart.productTitle} style={{
            width: "80%",
            alignContent: "center",
          }}>
            
              <div className="flex-container">
                <div className="flex-item-orderM"><b>Ordernummer:</b>{order.customerId}</div>
                <div className="flex-item-orderM"><b>Titel:</b>{cart.productTitle}</div>
                <div className="flex-item-orderS"><b>Eventdatum:</b>{cart.date}</div>
                <div className="flex-item-orderS"><b>Startid:</b> {cart.time}</div>
                <div className="flex-item-orderL"><b>Länk till event:</b> {cart.link}</div>
                {/* <Link to="/userHomePage"></Link> */}
                
              </div>
              <div className="flex-header-two">Ytterligare orderinformation</div>
              <div className="flex-container">
                <div className="flex-item-orderS"><b>Orderdatum:</b> {order.orderDate}</div>
                <div className="flex-item-orderS"><b>Status:</b> PAID</div>
                <div className="flex-item-orderS"><b>Antal:</b>{cart.quantity}</div>
                <div className="flex-item-orderS"><b>Pris, kr:</b> {cart.price}</div>
                <div className="flex-item-orderS"><b>Totalt pris, kr:</b> {(cart.quantity * cart.price)}</div>
                <div style={{
                  height: "0.5em",
                  width: "100%",
                  backgroundColor: '#75A488',
                  marginBottom: "0.6em",
                }}></div>
              </div>

            
          </div>
        );
      });
    })
  };
    return (

      <>
        <HeaderInlogged />
        <div className="wrappsAllContent">
          <div className="flexCenterAll ">

            <h1 className="titleRegisterAndLogin">Dina Ordrar</h1>

            <div>

              <div>
                {renderOrder()}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  export default OrderPage;

