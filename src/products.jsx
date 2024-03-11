import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import Allproduct from "./allproduct";

function Products(props) {
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
        setFirstPage(res.data.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product">
      <h1 className="h1">Most Sellings</h1>
      {firstPage.map((value, index) => (
        <div className="products" key={index}>
           <Allproduct
              value={value}
              cart={() => props.setCartCount((prevCount) => prevCount + 1)}
            />
        </div>
      ))}
    </div>
  );
}

export default Products;
