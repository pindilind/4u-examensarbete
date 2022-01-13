import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
            /* onClick={} */
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