import React from "react";
import { Link } from "react-router-dom";

const CartAfiya = ({ cart, updateQuantity, removeItem }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ borderBottom: "1px solid gray", padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${totalPrice}</h3>
      {cart.length > 0 && <Link to="/checkout"><button>Proceed to Checkout</button></Link>}
    </div>
  );
};

export default CartAfiya;
