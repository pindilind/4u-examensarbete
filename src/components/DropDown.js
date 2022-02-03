import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TiThMenu } from 'react-icons/ti';

import { makeStyles } from '@mui/styles';

import "../headers/HeaderInloggStyle.scss";

import MakeRequest from '../MakeRequest';

// categoriId 0-5, title

// hämta  alla , fltrerar med array på categoriID, lämna tillbaks och renderar
const ITEM_HEIGHT = 48;

const useStyles = makeStyles({
  root: {
    color: '#ffffff',
  }

});

export default function DropDown(props) {

  const classes = useStyles();

  const [categories, setCategories] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // LISTAR VÅRA KATEGORIER I DROPDOWN
  useEffect(() => {

    async function getCategories() {
      const cat = await MakeRequest("https://event4u.online:3005/categories", "GET")
      setCategories(cat);
      return cat
    }

    getCategories()

  }, [setCategories]);


  return (
    <div>
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

          <MenuItem key={categorie.categoriId} onClick={handleClose}>
            <Link to={{ pathname: "/userHomePage", state: { categoriId: categorie.categoriId } }} >
              {categorie.title}
            </Link>
          </MenuItem>
        ))}

      </Menu>
    </div>
  );
}
