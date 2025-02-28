import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList_Afiya";
import Cart from "./components/Cart_Afiya";
import Checkout from "./components/Checkout_Afiya";
import Confirmation from "./components/Confirmation_Afiya";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        : [...prev, { ...product, quantity: 1 }];
    });
  };
  // Function to clear the cart after order
  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)));
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />} />
        {/* <Route
          path="/checkout"
          element={cart.length > 0 ? <Checkout clearCart={() => setCart([])} /> : <Navigate to="/" />}
        /> */}
        
        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
        
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
