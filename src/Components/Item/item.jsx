import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{item?.title}</h4>
        <img className="product-image" src={item?.imageUrl} alt="img del producto" />
      </div>
      <Link to={'/item/' + item?.id}>  
      <button className="button-smaller">Ver Detalle</button>
      </Link>
      <div className="right">
      
      <p> Precio: ${item?.price}</p>
      </div>
    </div>
    
  );
}

export default Item;