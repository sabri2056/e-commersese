import React from 'react';
import logo from '../../assets/logo.jpg';


function Navbar(props) {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo de la empresa" className="logo" />
      <ul className='nav'>
          <a href='#'>Sushi</a>
          <a href='#'>Menu Tradicionales</a>
          <a href='#'>Entradas</a>
      </ul>
    </div>
  );
}

export default Navbar;
