import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import { CartContext } from '../../Store/cart-Context';
import "./Navbar.css";


const CartWidget = () => {
  const { getCartQuantity } = useContext(CartContext);

  return (
    <Link to="/cart"> 
      <button class="btn btn-dark">
        <div className="cart-widget">
          <i className="fas fa-shopping-cart cart-icon"></i>
          <span className="cart-notification">{getCartQuantity()}</span>
        </div>
      </button>
    </Link>
  );
};

export default CartWidget;

