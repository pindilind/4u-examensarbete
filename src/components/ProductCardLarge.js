import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CartCounter from './CartCounter';

const useStylesLarge = makeStyles({
  cardStylingLarge: {
    display: "flex",
    overfloWrap: "anywhere",
    maxWidth: '50%',
    boxShadow: "none",
    backgroundColor: '#292B28',
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
    backgroundColor: '#75A488',
    display: 'flex',
  },

  cardTitleStyle: {
    height: 220,
    textAlign: "center",
    color: '#75A488',
    display: 'flex',
    flexDirection: 'column'
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

  buttonStyle: {
    height: 25,
    padding: 1,
  },

});

export default function ProductCardLarge(props) {
  const classes = useStylesLarge()

  const product = props.product;
  
  const addProduct = async () => {

  let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart)

    if (cart == null) {
        cart = {}
    }

    if (!cart) {
        cart = product;
    }

    cart.quantity = cart.quantity || 0;
    cart.quantity++;

 updateCounter(cart);

    localStorage.setItem("cart", JSON.stringify(cart))
};



 function updateCounter(cart) {
  let amount = 0;
  let counter = 0;

  if (cart !== null) {

      for (const key in cart) {
          if (Object.hasOwnProperty.call(cart, key)) {
              const cartRow = cart[key];
              counter += cartRow.quantity
              amount += cartRow.price_data.unit_amount * cartRow.quantity
          }
      }

  }

  /* document.getElementById("cartCounter").innerHTML = counter; */
 /*  <CartCounter counter={counter} /> */
  

}
  
  return (

    <Card className={classes.cardStylingLarge}>
      <CardActionArea className={classes.cardActionStyle}>
        <CardMedia className={classes.cardMediaStyle}
          component="img"
          image=""
          alt=""
        />
        <CardContent className={classes.cardTitleStyle}>

          <Typography variant="h6">
            {product.price_data.product_data.title}
          </Typography>

          <Typography className={classes.cardDescStyleOne}>
            Information om eventet
          </Typography>

          <Typography className={classes.cardDescStyleTwo}>
            {product.description}
          </Typography>

        </CardContent>

        <CardActions className={classes.buttonDiv}>
          <Button
            className={classes.buttonStyle}
            product={product}
            onClick={addProduct()}
            size="small"
            color="success"
            variant="contained"
            disableElevation>
            Lägg till i varukorgen
          </Button>

        </CardActions>

      </CardActionArea>
    </Card>
  );
}