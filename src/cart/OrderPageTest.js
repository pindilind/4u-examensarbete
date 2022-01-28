import React, { useEffect, useState } from "react";

import HeaderInlogged from "../headers/HeaderInlogged";
// import OrderTableTest from "../components/OrderTableTest";
import Footer from "../footer/Footer";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MakeRequest from '../MakeRequest';
import { subMilliseconds } from "date-fns"

import "../App.scss";
import "./CartPageStyle.scss";



export default function OrderPageTest(props) {

  
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = React.useState(false);

  console.log(orders)
  console.log(orders.cart)
  

  useEffect(() => {
    async function getOrders() {

      let order = await MakeRequest("http://localhost:3005/orders", "GET");
      console.log(order)

      // if (!order || Object.keys(order).length === 0) {
        
      // }
      return order;

    };
    getOrders().then(result => {
      setOrders(result);
    });

  }, [setOrders]);
  console.log(orders);

// Något som inte stämmer? tappar data och visar inget i consollen nedan
  
  function renderOrder() {
      
    let orderArray = (Object.values(orders))
    console.log(orderArray)

    return orderArray.map((value, index) => {
      let cart = JSON.parse(value.cart)
      console.log(JSON.parse(value.cart))
      console.log(cart)

      return (
        <>

        <React.Fragment>
          <TableRow key={orders.desc} sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
              >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton> 
            </TableCell>
            <TableCell component="th" scope="row">
              {value.customerId}
            </TableCell>
            <TableCell align="left">{value.productTitle}</TableCell>
            <TableCell align="left">{value.date}</TableCell>
            <TableCell align="left">event starttid</TableCell>
            <TableCell align="left">event länk</TableCell> 
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit> 
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Orderinformation
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>orderDatum</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="left">Antal</TableCell>
                      <TableCell align="left">Pris</TableCell>
                      <TableCell align="left">Totalt prisPrice (kr)</TableCell>
                    </TableRow>
                  </TableHead>
                 <TableBody>
                   <TableRow key={value.date}></TableRow>
                   <TableCell component="th" scope="row"> </TableCell>
                      
                     <TableRow >
                     <TableCell component="th" scope="row">
                        {value.orderDate}
                     </TableCell>
                     <TableCell>betald</TableCell>
                     <TableCell align="left">2</TableCell>
                     <TableCell align="left">{value.amount /100}</TableCell>
                     <TableCell align="left"> {2 * value.amount/100}
                     
                     </TableCell>
                     </TableRow>
                     
                  </TableBody>
                </Table>
              </Box>
              </Collapse> 
            </TableCell>  
          </TableRow>
          </React.Fragment>
        </>
      );
    });
  };
 
 

    
    return (
      
      <>

        <HeaderInlogged />
        <div className="wrappsAllContent">
          <div className="flexCenterAll ">
            <h1>Dina Ordrar</h1>

            <Typography className={'orderDiv'} component="div">

              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Ordernummer</TableCell>
                      <TableCell align="left">Event titel</TableCell>
                      <TableCell align="left">Event datum</TableCell>
                      <TableCell align="left">Event startid</TableCell>
                      <TableCell align="left">Länk till event</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {orders.map((order) => (
                      <orders key={order.orderID} row={order} />
                    ))}  */}
                     {renderOrder()}
                  </TableBody>
                </Table>
              </TableContainer>


            </Typography>

          </div>
        </div>

        <Footer />

      </>


    );
  
}

