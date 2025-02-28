import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductListAfiya = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid black", padding: "10px" }}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListAfiya;
