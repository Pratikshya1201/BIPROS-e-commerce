import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Search } from "./search";
import { ShopContext } from "../context/shop-context";
import logo from "../assets/products/commerce.png";
import "./navbar.css";

export const Navbar = ({ searchInput, setSearchInput }) => {

  return (
    <div className="navbar">
      <img src={logo} alt="e-commerce" className="image" />
      <div className="title">
        <h1>Shopclues</h1>
      </div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

