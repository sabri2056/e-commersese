import React from 'react';
import Navbar from './Components/Navbar/navbar';
import CartWidget from './Components/Navbar/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <div>
      <Navbar />
      <CartWidget />
      <ItemListContainer greeting="¡Bienvenido a Sushi en Casa!" />
     
    </div>
    </>
  );
}

export default App;

