import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import Checkout from'../src/Components/checkout/Checkout';
import { CartContextProvider } from './Store/cart-Context';
import { ToastContainer } from 'react-toastify';
import './index.css';



function App() {
  return (
    <>
      <div>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/menu/:menuid" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartContextProvider>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;



