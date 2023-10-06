import React from "react";
import Item from "../Item/item";

function ItemList({ items }) {  

  return (
    <div className="item-list-container">
      <div className="row">
        {items.map((item) => (  
          <div className="col-md-4 mb-4" key={item.id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
