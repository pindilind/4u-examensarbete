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
    color: 'white',
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


export default function ProductCardSmall(props) {
  const classes = useStyles()

  const product = props.product;
 
  return (
      
    <Card className={classes.cardStyling}>
      <CardMedia className={classes.cardMediaStyle} />
      
      <Box className={classes.boxStyle}>

        <CardContent className={classes.cardBoxStyle}>
        
              
        <Typography className={classes.typoStyle} >
            {product.productTitle}
          </Typography>
          <Typography className={classes.typoStyle}>
            {product.description}
          </Typography>        

        </CardContent>

      </Box>

    </Card>
    )

  
}
