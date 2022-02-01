import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TiThMenu } from 'react-icons/ti';

import { makeStyles } from '@mui/styles';

import "../headers/HeaderInloggStyle.scss";

import MakeRequest from '../MakeRequest';



// hämta  alla , fltrerar med array på categoriID, lämna tillbaks och renderar
const ITEM_HEIGHT = 48;

const useStyles = makeStyles({
  root: {
    color: '#ffffff',
  }

});

export default function LongMenu(props) {

  const classes = useStyles();

  /* const product = props.product;
  console.log(product); */

  const [products, setProducts] = useState([]);

  const [filter, setFilter] = useState("all");

  const [categories, setCategories] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //LISTAR VÅRA KATEGORIER I DROPDOWN
  useEffect(() => {

    async function getCategories() {
      const cat = await MakeRequest("http://localhost:3005/categories", "GET")
      console.log(cat)
      return cat
    }

    getCategories().then(resultCat => {
      setCategories(resultCat);
      setFilter(resultCat);
    });


  }, [setCategories, setFilter]);

  useEffect(() => {

    async function getProducts() {
      const prod = await MakeRequest("http://localhost:3005/products", "GET")
      console.log(prod)
      return prod
    }

    getProducts().then(resultProd => {
      setProducts(resultProd);
      console.log(resultProd)

    });

  }, [setProducts]);


  function filterObjets() {
    products.filter(products => products.categories === 1).map(filteredProducts => ( 
    {filteredProducts} 
    ))
  }

     
  return (
      <div>
        {filterObjets()}
        <IconButton
          className={classes.root}
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <TiThMenu className={classes.root} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {categories.map((categorie) => (
            <MenuItem key={categorie.id} onClick={handleClose}>
              {categorie.title}
            </MenuItem>
          ))}

        </Menu>
      </div>
    );
  }
