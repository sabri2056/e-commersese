# Proyecto Final - Sushi En Casa


## Descripcion
Este proyecto final es el resultado de un curso de React y consiste en un sitio de comercio electrónico con conexión a Firebase. Los productos se obtienen de Firebase, y al realizar una compra, se genera una orden y se actualiza el stock de los productos correspondientes.


## Como levantar el proyecto
Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

- git clone [URL del repositorio]
- cd [nombre del directorio]

Instala las dependencias.
- npm install
- npm start

Asegúrate de configurar correctamente las variables de entorno en el archivo .env con los siguientes valores:

* apiKey:  VITE_FIRESTORE_API_KEY,
* authDomain:  VITE_FIRESTORE_AUTH_DOMAIN,
* projectId:  VITE_FIRESTORE_PROJECT_ID,
* storageBucket:  VITE_FIRESTORE_STORAGE_BUCKET,
* messagingSenderId:  VITE_FIRESTORE_MESSAGING_SENDER_ID,
* appId:  VITE_FIRESTORE_APP_ID,
* measurementId:  VITE_FIRESTORE_MEASUREMENT_ID,


## Componentes
### Nabvar

El componente Navbar muestra el logotipo de la tienda y enlaces a diferentes secciones del sitio. También incluye el componente CartWidget. Al hacer clic en el logotipo, se redirigirá al inicio si no estamos allí.

### CartWidget

Este componente muestra un ícono de carrito en la parte superior derecha cuando hay productos en el carrito, junto con un contador que indica la cantidad total de productos agregados. Al hacer clic en él, se redirigirá al carrito.

### Cart

El componente Cart muestra los productos agregados al carrito en forma de elementos individuales (CartItem). Debajo de la lista de productos, se muestra el total de productos y sus cantidades, seguido de un botón para vaciar el carrito y otro para proceder al proceso de pago. Si no hay productos en el carrito, se muestra un mensaje indicándolo, junto con un botón para volver al catálogo.

### Item

Este componente muestra la imagen, nombre, precio y cantidad de cada producto agregado al carrito. También incluye un botón para eliminar un producto del carrito.

### Checkout

El componente Checkout muestra de manera organizada los productos en el carrito, seguidos de un formulario para completar con nombre, teléfono y correo electrónico. Luego, un botón permite finalizar la compra. Una vez completados los campos del formulario y se hace clic en el botón, se genera una orden con los datos del formulario y los productos del carrito. Por último, se muestra el ID de la orden generada.

### ItemList e ItemListContainer 

Estos son componentes que se encargan de mostrar la lista de productos, incluyendo imagen, nombre y precio. Los productos se muestran según la categoría seleccionada. Si se hace clic en uno de los productos, se redirige al detalle del producto (ItemDetail).

### ItemDetail e ItemDetailContainer 

Estos componentes muestran detalles del producto seleccionado desde ItemList, incluyendo nombre, descripción, disponibilidad de stock (cantidad o "sin stock" si es igual a 0), precio y el componente ItemCount. Al hacer clic en "Agregar al carrito", se muestra un nuevo botón que redirige al carrito.

### ItemCount

Este componente de contexto contiene los productos agregados al carrito y una serie de funcionalidades relacionadas con el carrito.

### CartContext
Es el componente de contexto, contiene los productos que agreguemos al cart y una serie de funcionalidades relacionadas
