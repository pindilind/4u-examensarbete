import React, { useEffect, useState } from "react"; 
import Typography from '@mui/material/Typography'; 
import HeaderInlogged from "../headers/HeaderInlogged"; 
import Footer from "../footer/Footer"; 
import MakeRequest from "../MakeRequest"; 

import "../App.scss"; 
import "./CartPageStyle.scss"; 

import { TableBody } from "@mui/material"; 
 
 

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

            //key={orders.orderID} 
          <> 
            <div> 

            <tr key={cart.productTitle} style={{ 
              width: "100%", 
              display: "flex", 
              justifyContent: "space-between" 
            }}> 

              <td style={{
                      width: "8em",
                    }}>{order.customerId}</td> 
              <td style={{
                      width: "20em",
                    }}>{cart.productTitle}</td> 
              <td style={{
                      width: "8em",
                    }}>{cart.date}</td> 
              <td style={{
                      width: "6em",
                    }}>{cart.time}</td> 
              <td style={{
                      width: "20em",
                    }}>{cart.link}</td> 
            </tr> 

            {/*HÄR KOMMER COLLAPS-DELEN */} 

            <tr> 
              <div>Orderinformation</div> 

              <table> 
                <tablehead> 
                  <tr> 
                    <th style={{
                      width: "10em",
                    }}>Orderdatum</th> 
                    <th style={{
                      width: "4em",
                    }}>Status</th> 
                    <th style={{
                      width: "4em",
                    }}>Antal</th> 
                    <th style={{
                      width: "4em",
                    }}>Pris</th> 
                    <th style={{
                      width: "6em",
                    }}>Totalt pris</th> 
                  </tr> 
                </tablehead> 
                <tr> 
                  <tablebody> 
                    <tr> 
                      <td style={{
                      width: "10em",
                    }} >{order.orderDate}</td> 
                      <td style={{
                      width: "4em",
                    }}>PAID</td> 
                      <td style={{
                      width: "4em",
                    }}>{cart.quantity}</td> 
                      <td style={{
                      width: "4em",
                    }}>{cart.price}</td> 
                      <td style={{
                      width: "6em",
                    }}>{(cart.quantity * cart.price)}</td> 
                    </tr> 
                  </tablebody> 
                </tr> 
              </table> 
            </tr> 
          </div> 
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
                  <th style={{
                      width: "8em",
                    }}>Ordernummer </th> 
                  <th style={{
                      width: "20em",
                    }}>Event titel</th> 
                  <th style={{
                      width: "8em",
                    }}>Event datum</th> 
                  <th style={{
                      width: "6em",
                    }}>Event starttid</th> 
                  <th style={{
                      width: "20em",
                    }}>Länk till event</th> 
                </tr> 
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
