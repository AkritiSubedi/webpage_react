import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import "./Imageshorting.css";
import { Link, NavLink } from "react-router-dom";
import Allproduct from "./allproduct";

function Imageshorting(props) {
  const [data, setData] = useState([]);
  const [firstPage, setFirstPage] = useState([]);

  function handleCart(id) {
    props.setCartCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setFirstPage(res.data.slice(0, 15));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="sort">
        <div className="text2">Sort by Alphabetically, A-Z</div>
      </div>
      <div className="product">
        {firstPage.map((value, index) => (
          <div className="products" key={index}>
            <Allproduct
              value={value}
              cart={() => handleCart(value.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Imageshorting;
