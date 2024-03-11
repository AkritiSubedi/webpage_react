import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar(props) {
  const [show, setShow] = useState(false);
  function toggleMenu() {
    setShow(!show);
  }
  return (
    <div className="container12">
      <nav>
        {show ? (
          <ul className="nav-bar1">
            <NavLink to="/">
              <li className="li1">Home</li>
            </NavLink>
            <NavLink to="/imageshorting">
              <li className="li1">Shop</li>
            </NavLink>
            <NavLink to="/nothing">
              <li className="li1">About</li>
            </NavLink>
            <NavLink to="/nothings">
              <li className="li1">Contact Us</li>
            </NavLink>
            <div className="cart2"> {props.cart}</div>
            <div className="icon1">
              <NavLink to="/">
                <IoCartOutline />
              </NavLink>
            </div>
          </ul>
        ) : (
          <></>
        )}

        <div className="navbar">
          <div className="hicon">
            <div className="ham" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </div>
          </div>
          <ul className="nav-bar">
            <NavLink to="/">
              <li className="li">Home</li>
            </NavLink>
            <NavLink to="/imageshorting">
              <li className="li">Shop</li>
            </NavLink>
            <NavLink to="/nothing">
              <li className="li">About</li>
            </NavLink>
            <NavLink to="/nothings">
              <li className="li">Contact Us</li>
            </NavLink>
            <div className="cart22"> {props.cart}</div>
            <div className="icon">
              <NavLink to="/">
                <IoCartOutline />
              </NavLink>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
