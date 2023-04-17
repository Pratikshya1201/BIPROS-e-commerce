import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  // const isLoggedIn = localStorage.getItem("loggedin");
  const handleClick = (e) => {
    e.preventDefault();
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));
    if(isLoggedIn === true) {
       addToCart(id);
    } else {
      alert("Please log in");
      navigate("/login");
    }
  };

  const handleBuyClick = (e) => {
    e.preventDefault();
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));
    if(isLoggedIn === true) {
       addToCart(id);
       navigate("/payment");
    } else {
      alert("Please log in");
      navigate("/login");
    }
  };


  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p><b> Rs. {price}</b></p>
      </div>
      <div>
      {/* <button className="addToCartBttn"  onClick={() =>   addToCart(id)}> */}
      <button className="addToCartBttn"  onClick={handleClick}>
       <b>Add To Cart</b>
      </button>
      <button onClick={handleBuyClick} className="buynow">
       <b>Buy Now</b>
      </button>
      </div>
    </div>
  );
};
