import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User } from "phosphor-react";
import { Badge, Button } from "@material-ui/core";
import { Search } from "./search";
import { ShopContext } from "../context/shop-context";
import { Register } from "../pages/register/register";
import { Login } from "../pages/login/login";
import { Product } from "../pages/shop/product";
import logo from "../assets/products/commerce.png";
import { PRODUCTS } from "../products";
import "./navbar.css";

export const Navbar = ({ searchInput, setSearchInput }) => {

  const { cartItems } = useContext(ShopContext);
  
  let count = 0;
  {PRODUCTS.map((product) => {
    if (cartItems[product.id] !== 0) {
        count += cartItems[product.id];
          }
  })}

  // console.log(cartItemCount);

  const storage = JSON.parse(localStorage.getItem("address"));


  return (
    <div className="navbar">
      <img src={logo} alt="e-commerce" className="image" />
      <div className="title">
        <h1>Shopclues</h1>
      </div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/register"> Register </Link>
        <Link to="/login"> Login </Link>
        <Link to="/cart">
          <Badge badgeContent={count} color="secondary"> 
            <ShoppingCart size={32} />
          </Badge>
        </Link>
        <Link to="/profile">
          <User size={32} />
        </Link>
       
      </div>
      
    </div>
  );
};

