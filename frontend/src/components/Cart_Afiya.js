import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CartAfiya = ({ cart, updateQuantity, removeItem }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">Cart is empty</div>
      ) : (
        <div className="list-group">
          {cart.map((item) => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-1">${item.price} x {item.quantity}</p>
              </div>
              <div>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3 className="text-end mt-3">Total: ${totalPrice.toFixed(2)}</h3>
      {cart.length > 0 && (
        <div className="text-center mt-3">
          <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default CartAfiya;
