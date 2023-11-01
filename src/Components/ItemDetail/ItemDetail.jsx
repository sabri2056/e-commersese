import React, { useState, useContext, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Store/cart-Context";

function ItemDetail({ item }) {
  const [cantidadDeProductos, setCantidadDeProductos] = useState(0);
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);
  const { addProduct, isInCart, removeProduct, getCartQuantity, printCart, clear } = useContext(CartContext);

  function addHandler(quantityToAdd) {
    setCantidadDeProductos(quantityToAdd);
    addProduct({ ...item, quantity: quantityToAdd });
    setAgregadoAlCarrito(true);
  }

  return (
    <div className="item-detail-container">
      <div className="left">
        <div className="card">
          <div className="card-body">
            <img
              className="product-image"
              src={item?.imageUrl}
              alt="img del producto"
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <div className="card-body small-card-body">
            <h2 className="small-text">{item?.title}</h2>
            <p className="small-text">Descripción: {item?.descripcion}</p>
            <p>Precio: ${item?.price}</p>
            <div className="count-container">
              {agregadoAlCarrito ? (
                <div className="add-to-cart-button">
                  <Link to="/cart">
                    <button className="button-smaller">Terminar Compra</button>
                  </Link>
                </div>
              ) : (
                <>
                  <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                  
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;


