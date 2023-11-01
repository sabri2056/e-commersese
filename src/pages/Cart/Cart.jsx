import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Store/cart-Context";
import "./Cart.css";

function Cart() {
  const { products, removeProduct, getCartQuantity, clearCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Terminar Compra</h2>
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.imageUrl} alt={product.title} className="product-image" />
              <div className="item-details">
                <h3>{product.title}</h3>
                <p>Precio: ${product.price}</p>
                <p>Cantidad: {product.quantity}</p>
                <button className="button-smaller" onClick={() => removeProduct(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          
          <p>Total: ${products.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
          <div className="button-container">
            <button className="button-smaller" onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">
              <button className="button-smaller">Ir al Checkout</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <p>No hay ítems en el carrito.</p>
          <Link to="/"><button className="button-smaller"> Volver al catálogo </button></Link>
        </>
      )}
    </div>
  );
}

export default Cart;
