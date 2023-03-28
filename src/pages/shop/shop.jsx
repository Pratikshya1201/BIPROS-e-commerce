import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import "./shop.css";
import { Product } from "./product";
export const Shop = ({ searchInput, setSearchInput }) => {
  const [products, setProducts] = useState(PRODUCTS);

  let filteredProduct = products.filter((product) =>
    product.productName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="shop">
      {/* <div className="shopTitle"> add slider
        <h1>E-Kart</h1>
      </div> */}

      <div className="products">
        {filteredProduct.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};