import React from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaShoppingCart } from 'react-icons/fa';

import { makeStyles } from '@mui/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    backgroundColor: "lightgrey",
    padding: '0 4px',
  },
}));


const useStyles = makeStyles({
  root: {
    color: '#ffffff',
    fontSize: "1.8rem"
  }

});
export default function CustomizedBadges(props) {

  const classes = useStyles()

  return (
    <IconButton className={classes.root} aria-label="cart">
      <StyledBadge className={classes.root} badgeContent={props.counter}>
        <FaShoppingCart /* className={'icon'} */
        />
      </StyledBadge>
    </IconButton>
  );
}
