import React, { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import productsList from "./productsList";
import { useParams } from "react-router-dom";


function getProducts(menu) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
   
      const filteredProducts = menu
        ? productsList.filter((product) => product.menu === menu)
        : productsList;

      resolve(filteredProducts);
    }, 2000);
  });
}

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { menuid } = useParams();

  useEffect(() => {
    getProducts(menuid)
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error al obtener los productos");
      });
  }, [menuid]);

  return (
    <div className="list-item-container">
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList items={products} />
      )}
    </div>
  );
}

export default ItemListContainer;

