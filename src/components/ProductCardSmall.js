import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { makeStyles } from '@mui/styles';

import ProductCardLarge from "./ProductCardLarge";

const useStyles = makeStyles({
  cardStyling: {
    display: "flex",
    overfloWrap: "anywhere",
    boxShadow: "none",
    color: 'white',
    padding: '1',
    marginBottom: "1rem",

    '@media (max-width: 480px)': {
      minWidth: '90%',
    }
  },

  cardMediaStyle: {
    display: 'flex',
    width: '40%',
    height: 100,
    backgroundColor: '#75A488',
  },

  boxStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: 'auto'
  },

  cardBoxStyle: {
    height: 100,
    margin: 1,
    // marginTop: 0,

  },

  /* typoStyle: {
    width: '60%',
    fontFamily: "Arial",
    fontWeight: "1",
    fontSize: "0.6rem",
    textAlign: "left",
  } */

});


export default function ProductCardSmall(props) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const product = props.product;

  return (

    <Card className={classes.cardStyling}>

      <CardMedia className={classes.cardMediaStyle}
        component="img"
        src={product.img}
        alt="carImg"
      >

      </CardMedia>

      <Box className={classes.boxStyle}>

        <CardContent className={classes.cardBoxStyle}>

          <Typography className={classes.typoStyle} >

            <Button onClick={handleOpen}>
              {product.productTitle}
            </Button>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box className={classes.boxStyle}>
                <ProductCardLarge product={product} updateCounter={props.updateCounter} />
                <Button onClick={handleClose} >Close</Button>
              </Box>
            </Modal>


          </Typography>
          <Typography>
            Datum: {product.date} ||
            Klockan: {product.time} ||
            Pris: {product.price} kr
          </Typography>

        </CardContent>

      </Box>

    </Card >
  )


}
