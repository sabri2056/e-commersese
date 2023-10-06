import React from 'react';
import logo from '../../assets/logo.jpg';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/"> {/* Utiliza Link en lugar de la etiqueta <a> */}
        <img src={logo} alt="Logo de la empresa" className="logo" />
      </Link>
      <ul className='nav'>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/menu/sushi">Sushi</NavLink>
        </li>
        <li>
          <NavLink to='/menu/tradicionales'>Menu Tradicionales</NavLink>
        </li>
        <li>
          <NavLink to='/menu/entradas'>Entradas</NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default Navbar;



