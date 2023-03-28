import React, { useState } from "react";
import "./search.css";
import { PRODUCTS } from "../products";

export const Search = ({ searchInput, setSearchInput }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "IPhone",
      price: 120000.0
    },
    {
      id: 2,
      productName: "Macbook Pro 2022 (M1)",
      price: 250000.0
    },
    {
      id: 3,
      productName: "Cannon M50 Camera",
      price: 50000.0
    },
    {
      id: 4,
      productName: "Denim Jacket",
      price: 650.0
    },
    {
      id: 5,
      productName: "LED Light Strips",
      price: 50.0
    },
    {
      id: 6,
      productName: "TEE shirt",
      price: 250.0
    },
    {
      id: 7,
      productName: "GOLF SHIRT",
      price: 500.0
    },
    {
      id: 8,
      productName: "DON'T TRIP UNSTRUCTURED HAT",
      price: 40.0
    }
  ]);
  // const [searchInput, setSearchInput] = useState("");

  return (
    <div className="search">
      <input
        type="search"
        placeholder=" What is on your mind today?"
        onChange={(e) => {
          setSearchInput(e.target.value.toLowerCase());
        }}
      />

      {/* {filteredProducts.map((product) => (
        <h6>{"product.productName"}</h6>
      ))} */}
    </div>
  );
};