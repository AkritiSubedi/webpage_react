import React from "react";
import "./Product.css";
import { Link, NavLink } from "react-router-dom";

function Allproduct({ value, cart }) {
  return (
    <div className="product">
      <div className="image">
        <img className="img" src={value.image} alt="" />
        <div className="name">{value.title}</div>
        <div className="lcontainer">
          <div className="size">
            <div className="xl">sm</div>
            <div className="xl">lg</div>
            <div className="xl">xl</div>
          </div>
          <div className="price">{value.price}</div>
          <div className="product_name">{value.descriptions}</div>
          <Link to="/desc" state={{ from: value }}>
            <div className="buy">Buy Now</div>
          </Link>
          <div className="cart" onClick={cart}>
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
}
export default Allproduct;
