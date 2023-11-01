import React, { useEffect, useState } from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';



function getItem(id) {
  const db = getFirestore();
  const itemRef = doc(db, 'items', id);

  return getDoc(itemRef);
}

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const {id } = useParams();

  useEffect(() => {
    console.log(id);
    getItem(id)
      .then(snapchot  => {
        setItem({ ...snapchot.data(), id: snapchot.id});
      })
      .catch(err => {
        console.log(err);
        alert('Error al obtener el producto');
      });
  }, [id]);

  return (
    <div className='item-detail-container'>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;