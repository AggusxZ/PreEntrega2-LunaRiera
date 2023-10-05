import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar =  () => {
    return (
        <nav className='NavBar' >
            <Link to='/'>
                <h3>Tienda de Juegos</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={'/category/aventura'} className={({ isActive}) => isActive ? 'ActiveOption' : 'NavBarOption'}>Aventura</NavLink>
                <NavLink to={'/category/accion'} className={({ isActive}) => isActive ? 'ActiveOption' : 'NavBarOption'}>Accion</NavLink>
                <NavLink to={'/category/estrategia'} className={({ isActive}) => isActive ? 'ActiveOption' : 'NavBarOption'}>Estrategia</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar