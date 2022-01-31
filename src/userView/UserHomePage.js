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


const options = [
  'Alla kategorier',
  'Affärsutveckling',
  'Inspiration',
  'Psykologi',
  'Underhållning',
  'Vetenskap',
];


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

  const [products, setProducts] = useState([]);

  const [counter, setCounter] = useState(0);

  const [categories, setCategories] = useState([]);

  const [amount, setAmount] = useState(0);

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
          amount += cartRow.price * cartRow.quantity
        }
      }
      setCounter(counter);
      setAmount(amount);
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


          <div className={"longAndSearchDiv"}>
            <Search />
          </div>

          <div className={"userTitle"}>
            <h3>Good Afternoon</h3>
            <h3>USER</h3>
          </div>

          <div className={"caruselleDiv"}>
            {/* <Caruselle /> */}
          </div>
          {/*  <div>
            <h4>Kategori: </h4>{selectCategory()}
           
          </div> */}

          <div >
            <div className="displayFlexDivAlign">
              {renderProducts()}
            </div>

          </div>
        </div>
      </div>
      < Footer />

    </>

  );
}

export default UserHomePage;
