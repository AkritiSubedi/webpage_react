import React, { useState, useEffect } from "react";
import axios from "axios";
import "./description.css";
import Products from "./products";
import { useLocation } from "react-router-dom";

function Description(props) {
  const [data, setData] = useState([]);
  const [firstPage, setFirstPage] = useState([]);

  const location = useLocation();
  const { from } = location.state;
  console.log(from);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setFirstPage(res.data.slice(0, 1));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="maincont">
      <div className="dcont">
        <div className="dcont1">
          <div className="banner-image-container">
            <img className="img1" src={from.image} />
          </div>

          <div className="body">
            <div className="maintxt">
              <div className="name">{from.title}</div>
              <div className="price1">{from.price}</div>
              <div className="desc">{from.description}</div>
              <div className="sectxt">
                <div className="buy">Buy Now</div>
                <div
                  className="cart"
                  onClick={() => props.setCartCount(props.count + 1)}
                >
                  Add To Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products count={props.count} setCartCount={props.setCartCount} />
    </div>
  );
}

export default Description;
