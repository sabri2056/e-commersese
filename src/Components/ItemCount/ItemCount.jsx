import React, { useState } from "react";


function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
  {stock > 0 ? (
    <>
      <button className="button-smaller" onClick={handleDecrement}>-</button>
      <button className="button-smaller" onClick={handleIncrement}>+</button>
      <input
        type="number"
        className="input-smaller"
        value={count}
        readOnly
      />
      <button className="button-add" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  ) : (
    <p>Actualmente no posee stock disponible</p>
  )}
</div>

  );
}

export default ItemCount;
