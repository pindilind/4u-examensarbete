import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import { makeStyles } from '@mui/styles';

import CartCounter from './CartCounter';

const useStylesLarge = makeStyles({
  cardStylingLarge: {
    display: "flex",
    overfloWrap: "anywhere",
    maxWidth: '50%',
    boxShadow: "none",
    color: '#75A488',
    marginTop: '2rem',
    padding: '1',
    margin: 'auto',

    '@media (max-width: 480px)': {
      minWidth: '100%',
    }
  },

  cardMediaStyle: {
    height: 200,
    width: '100%',
    display: 'flex',
    objectFit: 'cover',
  },

  cardTitleStyle: {
    height: 220,
    textAlign: "center",
    color: '#75A488',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },

  cardDescStyleOne: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginTop: '1rem',
    fontWeight: 500,
  },

  cardDescStyleTwo: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginTop: '1rem',
  },

  cardActionStyle: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },

  buttonDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  
  buttonStyle: {
    height: 25,
    padding: 1,
  },

});


export default function ProductCardLarge(props) {

  const classes = useStylesLarge()

  const [cart, setCart] = useState([]);

  const [itemIndex, setItemIndex] = useState(1);

  const product = props.product;

  const productKey = product.productTitle;

  const addProduct = async () => {

    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart == null) {
      cart = {}
    }

    if (!cart[productKey]) {
      cart[productKey] = product;
    }

    cart[productKey].quantity = cart[productKey].quantity || 0;
    cart[productKey].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart))
    props.updateCounter();
  };


  return (

    <Card className={classes.cardStylingLarge}>
      <div className={classes.cardActionStyle}>
        <CardMedia className={classes.cardMediaStyle}
          component="img"
          image={product.img}
          alt=""
        />
        <CardContent className={classes.cardTitleStyle}>

          <Typography variant="h6">
            {product.productTitle}
          </Typography>

          <Typography>
            Datum: {product.date} ||
            Klockan: {product.time} ||
            Pris: {product.price} kr
          </Typography>

          <Typography className={classes.cardDescStyleOne}>
            Information om eventet
          </Typography>

          <Typography className={classes.cardDescStyleTwo}>
            {product.description}
          </Typography>

        </CardContent>

        <div className={classes.buttonDiv}>
          <Button
            className={classes.buttonStyle}
            onClick={addProduct}
            size="small"
            color="success"
            variant="contained"
            disableElevation>
            Lägg till i varukorgen
          </Button>
        </div>


      </div>
    </Card>
  );
}
