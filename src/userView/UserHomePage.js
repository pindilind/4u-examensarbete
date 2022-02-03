import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import HeaderInlogged from "../headers/HeaderInlogged";
import CalenderModal from "../components/CalenderModal";
import Search from './Search';
import ProductCardSmall from "../components/ProductCardSmall";
import Caruselle from '../components/Caruselle';

import MakeRequest from '../MakeRequest';

import Footer from "../footer/Footer";

import '../App.scss';
import './UserHomeStyle.scss';

document.title = 'Event4U';

function UserHomePage(props) {

  const [products, setProducts] = useState([]);

  const [counter, setCounter] = useState(0);

  const [categoriId, setCategoriId] = useState(1);

  const [user, setUser] = useState('');

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    const userName = sessionStorage.getItem("userName");

    setUser(userId);
    setUserName(userName)

  }, [setUser, setUserName, user])


  useEffect(() => {
    if (props.location.state && props.location.state.categoriId) {
      setCategoriId(JSON.parse(props.location.state.categoriId));
    }
  }, [setCategoriId, props])


  useEffect(() => {

    async function getProducts() {
      const status = await MakeRequest("https://localhost:3005/products", "GET")
      setProducts(status);
      return status
    }

    getProducts();
    updateCounter();

  }, [setProducts]);


  function updateCounter() {

    let cart = JSON.parse(localStorage.getItem("cart"));

    let counter = 0;

    if (cart !== null) {

      for (const key in cart) {
        if (Object.hasOwnProperty.call(cart, key)) {
          const cartRow = cart[key];
          counter += cartRow.quantity
        }
      }
      setCounter(counter);
    }
  }


  function renderProducts() {

    let filteredProducts;

    if (categoriId) {
      filteredProducts = products.filter(product => {

        if (product.categoriId.indexOf(categoriId) >= 0) {
          return true;
        } else {
          return false;
        }
      })
    } else {
      filteredProducts = products;
    }

    return filteredProducts.map((product, id) => {
      return (
        <ProductCardSmall key={id} product={product} updateCounter={updateCounter} />
      )
    });
  }

  if (user === null) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <HeaderInlogged counter={counter} />
      <div className={"wrappsAllContent"}>
        <div className={"flexCenterAll"}>

          <Caruselle />

          <div className={"userTitle"}>
            <h3 className={"val"}>Välkommen</h3>
            <h3 className={"userN"}>{userName}</h3>
          </div>

          <div className={"longAndSearchDiv"}>
            <CalenderModal />
            <Search />
          </div>

          <div>
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
