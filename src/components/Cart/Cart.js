import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
          <div className="Cart">
            <h1>No hay items en el carrito</h1>
            <Link to="/" className="Option">
              Productos
            </Link>
          </div>
        );
    }

    return (
        <div className="Cart">
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    total={total} 
                />
            ))} {}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>
                Limpiar carrito
            </button>
            <Link to='/checkout' className='Option'>
                Checkout
            </Link>
        </div>
)};

export default Cart;