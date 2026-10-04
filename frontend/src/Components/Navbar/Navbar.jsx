import React from "react";
import "./Navbar.css";

import logo from "../../assets/Frontend_Assets/logo.png";
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png";
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="nav-logo"></div>
        <img src={logo} alt=""  />
        <p>SHOPPER</p>
      
    </div>
  )
}

export default Navbar
