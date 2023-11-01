import React, { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import Spinner from "../../Components/checkout/Spinner";
import "./ItemListContainer.css";




function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { menuid } = useParams();

  useEffect(() => {
    setLoading(true);

    async function getProducts() {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        const q = menuid ? query(itemsCollection, where('menu', '==', menuid)) : itemsCollection;
        const querySnapshot = await getDocs(q);

        const items = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(items);
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert("Ocurrió un error al obtener los productos");
      }
    }

    getProducts();
  }, [menuid]);

  return (
    <div className="list-item-container">
      <h1>{greeting}</h1>
      {loading ? (
      <Spinner /> 
    ) : (
        <ItemList items={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
