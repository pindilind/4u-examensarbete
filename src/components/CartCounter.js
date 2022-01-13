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

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={props.counter}>
        <FaShoppingCart /* className={'icon'} */
        />
      </StyledBadge>
    </IconButton>
  );
}
