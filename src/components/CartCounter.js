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

  const [cartCounter, setCartCounter] = useState(0);

  const handleCartCounterChange = (event) => {
    setCartCounter(event.target.value);
  };
  const product = props.product;
  console.log(product)

  /* const addProduct = async () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart)

/* 
    if (cart == null) {
        cart = {}
    }

    if (!cart[productKey]) {
        cart[productKey] = product;
    }


    cart[productKey].quantity = cart[productKey].quantity || 0;
    cart[productKey].quantity++;

    updateCounter(cart);

    localStorage.setItem("cart", JSON.stringify(cart)) */
/* };
addProduct() */ 
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

    document.getElementById("cartCounter").innerHTML = counter;

}
 */
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4}>
      <FaShoppingCart /* className={'icon'} */
                />
      </StyledBadge>
    </IconButton>
  );
}
