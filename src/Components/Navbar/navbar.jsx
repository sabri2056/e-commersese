import React, { useContext } from 'react';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import { CartContext } from '../../Store/cart-Context';
import "./Navbar.css";


function Navbar(props) {
  const { products } = useContext(CartContext);
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo de la empresa" className="logo" />
      </NavLink>
      <ul className='nav-ul'> 
        <li className='nav-li'> 
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className='nav-li'> 
          <NavLink to="/menu/sushi">Sushi</NavLink>
        </li>
        <li className='nav-li'> 
          <NavLink to='/menu/tradicionales'>Menu Tradicionales</NavLink>
        </li>
        <li className='nav-li'> 
          <NavLink to='/menu/entradas'>Entradas</NavLink>
        </li>
      </ul>
      {products.length > 0 && <CartWidget />}
    </div>
  );
}


export default Navbar;



