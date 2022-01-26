import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TiThMenu } from 'react-icons/ti';

import "../headers/HeaderInloggStyle.scss";

import { makeStyles } from '@mui/styles';


const options = [
  'Alla event',
  'Affärsutveckling',
  'Inspiration',
  'Psykologi',
  'Underhållning',
  'Vetenskap',
];

// hämta  alla , fltrerar med array på categoriID, lämna tillbaks och renderar
const ITEM_HEIGHT = 48;

const useStyles = makeStyles({
  root: {
    color: '#ffffff',
  }

});

export default function LongMenu() {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Alla event'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
