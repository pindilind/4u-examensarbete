import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { makeStyles } from '@mui/styles';

import ProductCardLarge from "./ProductCardLarge";

const useStyles = makeStyles({
  cardStyling: {
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
    display: "flex",
    justifyContent: 'space-around',
    padding: 3,
  },
  flexDirectionColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',

    '@media (max-width: 480px)': {
      padding: 0,
      flexDirection: 'column',
    }
  },

  titleDiv: {
    fontSize: "1.2rem",
    justifyContent: "center",
    display: "flex",
    textAlign: 'center',
    width: '95%',
    marginTop: '-0.5rem',

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
    maxWidth: '20%',
    maxHeight: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    paddingInline: '1rem',

    '@media (max-width: 480px)': {
      padding: 0,
      fontSize: "1rem",
    }
  },

  datePriceStyle: {
    fontWeight: "bold",
    fontSize: "0.7rem",
    textAlign: 'center',
    marginBottom: '0.2rem',
    padding: 0,
    color: '#ffffff',
    background: '#75A488',


    '@media (max-width: 480px)': {
      padding: 0,
    }
  },
  p: {
    marginButtom: 0,
    marginTop: 0,
  },

  modalDiv: {
    border: 'none',
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
              Tid: {product.time} •
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
            >
                <ProductCardLarge product={product} updateCounter={props.updateCounter} />
            </Modal>
          </div>

        </div>

      </div>

    </Card >
  )


}
