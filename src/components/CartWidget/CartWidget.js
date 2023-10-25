import cart from './assets/cart.svg';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img className='CartImage' src={cart} alt='cart-widget' />
      <span className='CartCount'>{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;