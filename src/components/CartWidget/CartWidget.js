import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <img src={cart} alt="cart-widget" className='cart-image' />
            <span className='cart-count'>0</span>
        </div>
    )
}

export default CartWidget