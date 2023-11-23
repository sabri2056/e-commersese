import React, { useState, useContext } from "react";
import { CartContext } from "../../Store/cart-Context";
import { collection, addDoc } from "firebase/firestore";
import db from "../../services/firebase";
import Spinner from "./Spinner";
import './Checkout.css';

const Checkout = () => {
  const { getTotal, products: cart, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [load, setLoad] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [telError, setTelError] = useState("");

  const { Nombre, Email, Telefono } = buyer;

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
    validateForm();
  };

  const validateForm = () => {
    const isValidTel = /^[0-9]+$/.test(Telefono) && Telefono.length > 8;
  
    if (isValidTel) {
      setIsFormValid(true);
      setTelError(""); // Limpiar el mensaje de error si el teléfono es válido
    } else {
      setIsFormValid(false);
      setTelError("El teléfono debe tener más de 11 dígitos.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    try {
      const ordersCollection = collection(db, "orders");
      const orderData = {
        buyer,
        items: cart,
        date: new Date(),
        total: getTotal(),
      };
      const orderRef = await addDoc(ordersCollection, orderData);
      const newOrderId = orderRef.id;

      if (newOrderId) {
        console.log("Orden creada con ID:", newOrderId);
        clearCart();
        setBuyer({
          Nombre: "",
          Email: "",
          Telefono: "",
        });
        setOrderId(newOrderId);
        setShowForm(false);
      } else {
        console.error("Error al crear la orden");
      }
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="container">
      {orderId ? (
        <div className="container p-5">
          <p>
            Gracias por tu compra {Nombre}, el ID de la orden es:{" "}
            <span>{orderId}</span>
          </p>
        </div>
      ) : (
        <div>
          {showForm && (
            <div>
              <h2>Resumen de la compra</h2>
              {load ? (
                <Spinner />
              ) : (
                <div>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id}>
                        {item.title} - Cantidad: {item.quantity} - Precio: ${item.price}
                      </li>
                    ))}
                  </ul>
                  <p>Total de la compra: ${getTotal()}</p>
                </div>
              )}
            </div>
          )}

          {showForm && (
            <div>
              <h3>Completar Datos</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Nombre"
                  placeholder="Nombre"
                  value={Nombre}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  name="Telefono"
                  placeholder="Telefono"
                  value={Telefono}
                  onChange={handleInputChange}
                />
                {telError && <p style={{ color: 'red' }}>{telError}</p>}

                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  value={Email}
                  onChange={handleInputChange}
                />

                <input
                  type="submit"
                  value="Finalizar Compra"
                  className="button-smaller"
                  disabled={!isFormValid}
                />
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
