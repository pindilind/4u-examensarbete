import React, { useEffect, useState } from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaShoppingCart } from 'react-icons/fa';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    background: ` ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges(props) {

  const [counter, setCounter] = useState(0);
 /*  const [ticket, setTicket] = useState(props.location.state.ticket); */

  const handleCartCounterChange = (event) => {
    setCounter(event.target.value + 1);
  
  };


/* function updateCounter(cart) {
  let amount = 0;
  let counter = 0;

  if (cart !== null) {

      for (const key in cart) {
          if (Object.hasOwnProperty.call(cart, key)) {
              const cartRow = cart[key];
              counter += cartRow.quantity
              amount += cartRow.price_data.unit_amount * cartRow.quantity
          }
      }

  }

  /* document.getElementById("cartCounter").innerHTML = counter; */

/* } */



  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={counter}>
      <FaShoppingCart /* className={'icon'} */
                />
      </StyledBadge>
    </IconButton>
  );
}
