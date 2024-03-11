import { Component, useState } from "react";
import "./Body.css";
import Products from "./products";
import Imageshorting from "./Imageshorting"
import Footer from "./footer";

function Body(props) {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <div className="container">
        <img className="bgimg" src="./no bg.png" alt="" />
        <div className="text">GET DRESESD AS YOUNG</div>
      </div>
    
      <Products count={props.Count} setCartCount={props.setCartCount} updateCart={props.updateCart}/>
      <div className="image1">
        <img className="img11" src="./unsplash.png" alt="" />
      </div>
    </>
  );
}

export { Body };
