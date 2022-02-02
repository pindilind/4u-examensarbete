import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';

import './CalenderStyle.scss';

import CartCounter from './CartCounter';

const useStylesLarge = makeStyles({
  cardStylingLarge: {
    display: "flex",
    overfloWrap: "anywhere",
    maxWidth: '50%',
    boxShadow: "none",
    marginTop: '2rem',
    padding: '1',
    margin: 'auto',
    justifyContent: 'center',

    '@media (max-width: 480px)': {
      minWidth: '90%',
      marginTop: '0.5rem',
    }
  },

  cardMediaStyle: {
    height: 250,
    width: '100%',
    display: 'flex',
    objectFit: 'cover',
    '@media (max-width: 480px)': {
      objectFit: 'cover',
      height: 220,
    }
  },

  cardTitleStyle: {
    height: 200,
    textAlign: "center",
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    fontWeight: 'bold',
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
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
  },

});

export default function ProductCardLarge(props) {

  const classes = useStylesLarge();

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
          alt="product"
        />
        <CardContent className={classes.cardTitleStyle}>

          <Typography variant="h6">
            {product.productTitle}
          </Typography>

          <Typography>
            Datum: {product.date} •
            Tid: {product.time} •
            Pris: {product.price} kr
          </Typography>


          <Typography className={classes.cardDescStyleTwo}>
            {product.description}
          </Typography>

        </CardContent>

        <div className={classes.buttonDiv}>

          <button
            onClick={addProduct}
            className="btnStylingGeneralTwo"
            disableElevation>
            Lägg till i varukorgen
          </button>
        </div>


      </div>
    </Card>
  );
}
