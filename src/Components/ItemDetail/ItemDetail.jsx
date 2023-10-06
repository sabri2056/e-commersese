import React from "react";
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ item }) {
  return (
    <div className="item-detail-container">
      <div className="left">
        {/* Tarjeta izquierda con la imagen */}
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{item?.title}</h4>
            <img className="product-image" src={item?.imageUrl} alt="img del producto" />
          </div>
        </div>
      </div>
      <div className="right">
        {/* Tarjeta derecha con los datos */}
        <div className="card">
          <div className="card-body">
            <h2>{item?.title}</h2>
            <p>Descripción: {item?.descripcion}</p>
            <p>Precio: ${item?.price}</p>
            <div className="count-container">
              {/* Personaliza el componente ItemCount según tus necesidades */}
              <ItemCount initial={0} stock={item.stock} onAdd={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

