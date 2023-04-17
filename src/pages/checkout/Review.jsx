import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "../cart/cart-item";
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

  return (
    <>
      <Typography variant="h4" gutterBottom>Order Summary</Typography>
      <List disablePadding>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 && (
          <h2> Total: Rs. {totalAmount} </h2>
      )}
      </List>
    </>
  )
}

export default Review