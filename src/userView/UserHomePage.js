import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import HeaderInlogged from "../headers/HeaderInlogged";
import ProductCardSmall from "../components/ProductCardSmall";
import ProductCardLarge from "../components/ProductCardLarge";
import KeepMountedModal from "../components/ProductModal";
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


function UserHomePage() {
  const classes = useStyles()

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function getProducts() {
      const status = await MakeRequest("http://localhost:3005", "GET")
      console.log(status)

      return status
    }

    getProducts().then(result => {
      console.log(result)
      setProducts(result);

    });

  }, [setProducts]);

  function renderProducts() {

    return products.map(product => {
      return (
      <ProductCardSmall product={product} />
      )
    });
  }


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <HeaderInlogged />
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
            {/* <KeepMountedModal /> */}
          </div>

          {renderProducts()}

          <div>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <ProductCardLarge />
                <Button onClick={handleClose} >Close</Button>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </>


  );
}

export default UserHomePage;
