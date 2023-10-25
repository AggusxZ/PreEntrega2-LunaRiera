import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Resumen de la Compra</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
          <CheckoutForm />
        </div>
      )}
    </div>
  );
};

export default Checkout;