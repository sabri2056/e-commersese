import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const existingProductIndex = products.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity += product.quantity;
      setProducts(updatedProducts);
    } else {
      setProducts([...products, product]);
    }
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  const clearCart  = () => {
    setProducts([]);
  };

  const isInCart = (id) => {
    return products.some((p) => p.id === id);
  };

  const getCartQuantity = () => {
    return products.reduce((total, p) => total + p.quantity, 0);
  };

  const printCart = () => {
    console.log(products);
    console.log("Cantidad de productos en el carrito:", getCartQuantity());
  };

  const getTotal = () => {
    let total = 0;
    products.forEach((product) => {  
      const subtotal = product.price * product.quantity;  
      total += subtotal;
    });

    return total;
  };
  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        clearCart,
        isInCart,
        getCartQuantity,
        printCart,
        getTotal,  
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
