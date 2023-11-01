import React from "react";
import Item from "../Item/item";

function ItemList({ items }) {  

  return (
    <div className="item-list-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {items.map((item) => (  
          <div className="col" key={item.id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;

