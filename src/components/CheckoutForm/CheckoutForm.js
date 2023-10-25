import './CheckoutForm.css';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const { clearCart } = useContext(CartContext);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    console.log('Información de pago:', formData);

    clearCart();

    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="CheckoutForm">
      <h2>Checkout</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Número de tarjeta (16 dígitos):</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            onChange={handleInputChange}
            required
            pattern="\d{16}" 
          />
        </div>
        <div>
          <label htmlFor="expiration">Fecha de vencimiento (MM/YY):</label>
          <input
            type="text"
            id="expiration"
            name="expiration"
            onChange={handleInputChange}
            required
            pattern="\d{2}/\d{2}" 
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV (3 o 4 dígitos):</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            onChange={handleInputChange}
            required
            pattern="\d{3,4}" 
          />
        </div>
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default CheckoutForm;