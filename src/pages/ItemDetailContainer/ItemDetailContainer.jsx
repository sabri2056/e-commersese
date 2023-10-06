import React, { useEffect, useState } from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';



function getItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productsList = [
        {
          id: 1,
          title: "Avocado Thai Roll x 4u",
          price: "450",
          stock: 10,
          imageUrl: "/assets/premium.jpg",
          menu: "sushi",
          descripcion:
            "Relleno de ceviche de pescado blanco y kanikama, recubierto con láminas de palta aderezada con salsa tailandesa a base de pasta de maní flambeada, bañado con mermelada de rocoto y escamas de sal marina",
        },
        {
          id: 2,
          title: "Temaki de Langostino",
          price: "350",
          stock: 5,
          imageUrl: "/assets/premium_barquito.jpg",
          menu: "sushi",
          descripcion:
            "Cono de nori relleno de langostinos en tempura, palta y queso crema con salsa de maracuyá",
        },
        {
          id: 3,
          title: "Peke de Lomo",
          price: "350",
          stock: 9,
          imageUrl: "/assets/vianda_ejecutivo.jpg",
          menu: "tradicionales",
          descripcion: "A base de lomo y arroz",
        },
        {
          id: 4,
          title: "Bondiola Teriyaki",
          price: "450",
          stock: 10,
          imageUrl: "/assets/roll_hot.jpg",
          menu: "tradicionales",
          descripcion: "Braseada con salsa teriyaki y hongos portobello, sobre colchón de puré de batata cremoso",
        },
        {
          id: 5,
          title: "Wok de Vegetales y Arroz con Pollo",
          price: "350",
          stock: 8,
          imageUrl: "/assets/combo_hot1.jpg",
          menu: "entradas",
          descripcion: "Con salsa de ostras y soja, con pollo",
        },
        {
          id: 6,
          title: "Brochette Anticuchera Pollo",
          price: "350",
          stock: 10,
          imageUrl: "/assets/vianda_tradicion1.jpg",
          menu: "entradas",
          descripcion: "Tres pinchos sellados con salsa anticuchera, sobre salteado de arroz, vegetales, hilos de tamago, bañado con salsa de sésamo",
        },
      ];
      const item = productsList.find(item => item.id === parseInt(id));
      console.log(item);

      resolve(item);
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const {id } = useParams();

  useEffect(() => {
    console.log(id);
    getItem(id)
      .then(res => {
        setItem(res);
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