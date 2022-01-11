import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
/* import '../api/test.json'; */
import MakeRequest from '../MakeRequest';


const useStyles = makeStyles({
  cardStyling: {
    display: "flex",
    overfloWrap: "anywhere",
    minWidth: 500,
    boxShadow: "none",
    backgroundColor: '#292B28',
    // color: '#6AB547',
    color: 'white',
    /* marginTop: '1rem', */
    padding: '1',

    '@media (max-width: 480px)': {
      minWidth: '100%',
    }
  },

  cardMediaStyle: {
    display: 'flex',
    width: 100,
    height: 100,
    backgroundColor: '#75A488',
  },

  boxStyle: {
    display: 'flex',
    flexDirection: 'column',
  },

  cardBoxStyle: {
    height: 100,
    marginTop: 0,
  },

  typoStyle: {
    fontFamily: "Arial",
    fontWeight: "1",
    fontSize: "0.6rem",
    textAlign: "left",
  }

});


export default function ProductCardSmall() {
  const classes = useStyles()

  async function getProducts() {
    const status = await MakeRequest("http://localhost:3005", "GET")
    console.log(status)

    return status.map((status, key => {
             
    }))
  }

  getProducts();

  /* function renderTickets() {

    return status.map(status => {
      return (

        <Link key={ticket.id} to={{
          pathname: "/ticketDetails",
          state: { ticket }
        }}>
          <TicketCard ticket={ticket} />

        </Link>
      );
    });
  } */
  return (

    <Card className={classes.cardStyling}>
      <CardMedia className={classes.cardMediaStyle} />
      
      <Box className={classes.boxStyle}>

        <CardContent className={classes.cardBoxStyle}>

          <Typography className={classes.typoStyle} >

            <h2>Title</h2>

          </Typography>
          <Typography className={classes.typoStyle}>
            A summary description of the event...
          </Typography>

        </CardContent>

      </Box>

    </Card>
  );
}
