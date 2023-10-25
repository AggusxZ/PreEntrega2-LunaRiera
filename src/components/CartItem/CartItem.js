import './CartItem.css'
import React from 'react';

const CartItem = ({ id, name, price, quantity}) => {
  const subtotal = price * quantity;
  
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
      </div>
      <div className="cart-item-quantity">
        <p>Cantidad: {quantity}</p>
        <p>Subtotal: ${subtotal}</p>
      </div>
    </div>
  );
};

export default CartItem;