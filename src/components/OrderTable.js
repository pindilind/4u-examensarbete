import React, { useState, useEffect } from 'react';
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

function createData(orderID, title, eventDate, eventStartTime, link, date, status, amount, price, totalPrice) {
  return {
    orderID,
    title,
    eventDate,
    eventStartTime,
    link,
    history: [
      {
        date,
        status,
        amount,
        price,
        totalPrice

      },
      /*  {
         date: '2022-02-05',
         status: 'paid',
         amount: 4,
         price: 850,
         totalPrice: 1700
       }, */
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
          {row.orderID}
        </TableCell>
        <TableCell align="left">{row.title}</TableCell>
        <TableCell align="left">{row.eventDate}</TableCell>
        <TableCell align="left">{row.eventStartTime}</TableCell>
        <TableCell align="left">{row.link}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>orderDate</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">TotalPrice (kr)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.status}</TableCell>
                      <TableCell align="left">{historyRow.amount}</TableCell>
                      <TableCell align="left">{historyRow.price}</TableCell>
                      <TableCell align="left">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    eventStartTime: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      }),
    )/* 
     */

  })
};

const rows = [
  // createData('09878493', 'Morgan Alling', '2022-03-03', '18:00', 'https:/event4u.online'),
  /* createData('09878856', 'Tina Thörner', '2022-04-13', '19:00', 'https:/event4u.online'),
  createData('0987993', 'Robert Gustafsson', '2022-05-25', '19:30', 'https:/event4u.online'), */
  createData()
];


export default function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Ordernummer</TableCell>
            <TableCell align="left">Event titel</TableCell>
            <TableCell align="left">Event datum</TableCell>
            <TableCell align="left">Event startid</TableCell>
            <TableCell align="left">Länk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderID} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

