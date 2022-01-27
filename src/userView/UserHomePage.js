import React, { useEffect, useState } from "react";

import HeaderInlogged from "../headers/HeaderInlogged";
import ProductCardSmall from "../components/ProductCardSmall";
import Caruselle from '../components/Caruselle';

import MakeRequest from '../MakeRequest';

import Footer from "../footer/Footer";
import Avatar from "../components/Avatar";

import '../App.scss';
import './UserHomeStyle.scss';

import { makeStyles } from '@mui/styles';

const options = [
  'Alla event',
  'Affärsutveckling',
  'Inspiration',
  'Psykologi',
  'Underhållning',
  'Vetenskap',
];

const useStyles = makeStyles({
  style: {
  }

});



function UserHomePage(props) {

  const classes = useStyles()

  const [products, setProducts] = useState([]);

  const [counter, setCounter] = useState(0);
  const [categories, setCategories] = useState([]);

  const product = props.product;
  

  useEffect(() => {

    async function getProducts() {
      const status = await MakeRequest("http://localhost:3005/products", "GET")

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

 /*  function selectCategory(props) {
    const category = options;
    let choice = category;

    console.log(category)
    console.log(choice)
  
    if (choice === 'Alla event')
      return (
       console.log(choice)
       );
     if(choice === 'Affärsutveckling'){
       return (
         console.log(choice)
       )
     }
    
  } */
  


  function renderProducts() {

    return products.map((product, id) => {
      return (
        <ProductCardSmall key={id} product={product} updateCounter={updateCounter} />

      )
    });
  }

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

          <div>
            <Caruselle />
          </div>
         {/*  <div>
            <h4>Kategori: </h4>{selectCategory()}
           
          </div> */}

          <div>
            {renderProducts()}
          </div>

        </div>

      </div>
      <footer>
        < Footer />
      </footer>
    </>


  );
}

export default UserHomePage;
