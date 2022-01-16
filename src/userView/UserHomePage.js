import React, { useEffect, useState } from "react";

import { makeStyles } from '@mui/styles';


import HeaderInlogged from "../headers/HeaderInlogged";
import ProductCardSmall from "../components/ProductCardSmall";
import CalenderModal from '../components/CalenderModal';
import Caruselle from '../components/Caruselle';
import '../App.scss';
import './UserHomeStyle.scss';

import MakeRequest from '../MakeRequest';

/* import data from '../api/test.json'; */

import Footer from "../footer/Footer";
import Search from './Search';
import LongMenu from "../components/DropDown";
import Avatar from "../components/Avatar";
import { width } from "@mui/system";


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
    padding: 1,

    '@media (max-width: 480px)': {
      minWidth: '100%',

    }
  },

  cardMediaStyle: {

    width: 100,
    height: 100,
    backgroundColor: '#75A488',
  },

  boxStyle: {
    display: 'flex',
    flexDirection: 'column',
  },

  cardBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 110,
    marginTop: 0,
  },

  typoStyle: {

    fontFamily: "Arial",
    fontWeight: "1",
    fontSize: "0.6rem",
    textAlign: "left",
  },

  renderProductDiv: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    color: 'red',
    fontSize: 1,
  }



});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  p: 4,

  '@media (max-width: 480px)': {
    minWidth: 300,
  }

};



function UserHomePage(props) {

  const classes = useStyles()

  const [products, setProducts] = useState([]);

  const [counter, setCounter] = useState(0);

  const product = props.product;

  useEffect(() => {

    async function getProducts() {
      const status = await MakeRequest("http://localhost:3005", "GET")

      return status
    }

    getProducts().then(result => {
      setProducts(result);

    });

    updateCounter();

  }, [setProducts]);


  function updateCounter() {

    let cart = JSON.parse(localStorage.getItem("cart"));

    let amount = 0;
    let counter = 0;

    if (cart !== null) {

      for (const key in cart) {
        if (Object.hasOwnProperty.call(cart, key)) {
          const cartRow = cart[key];
          counter += cartRow.quantity
          /* amount += cartRow.price_data.unit_amount * cartRow.quantity */
        }
      }
      setCounter(counter);
    }
  }


  function renderProducts() {

    return products.map(product => {
      return (
        <ProductCardSmall product={product} updateCounter={updateCounter} />

      )
    });
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <HeaderInlogged product={product} counter={counter} />
      <div className={"wrappsAllContent"}>
        <div className={"flexCenterAll"}>

          <div className={"avatarUser"}>
            <Avatar />
            <div>
              <h3>Good Afternoon</h3>
              <h3>USER</h3>
            </div>
          </div>

          <div className={"longAndSearchDiv"}>
            {/* <LongMenu /> */}
            {/* <Search /> */}
          </div>
          <div>
            <Caruselle />
          </div>

          <div>
            <CalenderModal />
          </div>
          <div>
            {renderProducts()}
          </div>



        </div>

      </div>

    </>


  );
}

export default UserHomePage;
