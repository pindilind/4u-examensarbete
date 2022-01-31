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
    overfloWrap: "anywhere",
    boxShadow: "none",
    color: 'black',
    padding: 1,
    marginBottom: "1rem",
    width: '90%',

    '@media (max-width: 480px)': {
      width: '95%',
    }
  },

  cardContent: {
    height: 100,
    /* flexDirection: 'row', */
    display: "flex",

  },
  flexDirectionColumn: {
    display: 'flex',
    flexDirection: 'column',
    /* width: '90%', */

    '@media (max-width: 480px)': {
      padding: 0,
      flexDirection: 'column',
    }
  },

  titleDiv: {
    fontSize: "1.2rem",
    /* justifyContent: "center", */
    display: "flex",
    textAlign: 'center',
    /* minWidth: '100%', */
    marginButtom: '0rem',
    marginTop: '0rem',

    '@media (max-width: 480px)': {
      fontSize: '1rem',
      padding: 0.6,
      flexWrap: 'wrap'
    }
  },

  dateDiv: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    display: 'flex',
    minWidth: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    /* padding: '1rem', */

    '@media (max-width: 480px)': {
      padding: 0,
    }
  },
  datePriceStyle: {
    fontWeight: "bold",
    fontSize: "0.7rem",
    textAlign: 'center',
    marginBottom: '0rem',
    padding: 0,

    '@media (max-width: 480px)': {
      padding: 0,
    }
  },

  p: {
    marginButtom: 0,
    marginTop: 0,
  }
});


export default function ProductCardSmall(props) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const product = props.product;

  return (

    <Card className={classes.cardStyling}>

      <div className={classes.cardContent}>

        <div className={classes.dateDiv}>
          <p>
            {product.date}
          </p>
        </div>

        <div className={classes.flexDirectionColumn}>
          <div className={classes.datePriceStyle}>
            <p>
              Klockan: {product.time} •
              Pris: {product.price} kr
            </p>
          </div>

          <div className={classes.titleDiv}>
            <p onClick={handleOpen}>
              {product.productTitle}
            </p>
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
          </div>

        </div>

      </div>

    </Card >
  )


}
