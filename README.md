# Proyecto Final - Sushi En Casa


## Descripcion
Proyecto final del curso de react, un ecommerce con conexión de firebase del cual vienen los productos con sus determinadas propiedades y a su vez al momento de realizar la compra se genera una orden y se actualiza el stock de estos productos.


## Como levantar el proyecto
Para levantar el proyecto se deben ejecutar los siguientes comandos:

- npm install
- npm start

Para el correcto funcionamiento, deberemos tener seteadas las variables de entorno en el archivo .env. Estas variables son:

* apiKey:  VITE_FIRESTORE_API_KEY,
* authDomain:  VITE_FIRESTORE_AUTH_DOMAIN,
* projectId:  VITE_FIRESTORE_PROJECT_ID,
* storageBucket:  VITE_FIRESTORE_STORAGE_BUCKET,
* messagingSenderId:  VITE_FIRESTORE_MESSAGING_SENDER_ID,
* appId:  VITE_FIRESTORE_APP_ID,
* measurementId:  VITE_FIRESTORE_MEASUREMENT_ID,

## FOTO O VIDEO DEMO

## Componentes
### Nabvar

El navbar muestra el logo de la tienda y los links a las distintas secciones del sitio. Además muestra el componente CartWidget. Al hacer click en el logo nos redirigirá (si nos encontramos en otra seccion) al inicio.

### CartWidget

Este componente nos muestra el ícono de un carrito en la parte superior derecha, el cual en el caso de tener productos agregados al carrito, nos mostrara un numero con la cantidad de productos totales agregados. También al hacer clic sobre el, nos redirigirá al Cart

### Cart

El cart nos mostrara los productos agregados al carrito en forma de otro componente CartItem. Debajo del ultimo producto, nos mostrara el total de los productos y sus cantidades seguido de un botón para vaciar el carrito y otro para proceder al Checkout. En caso de que no haya ningún producto agregado al carrito nos mostrara un mensaje indicándolo seguido de un botón para regresar al inicio.

### Item

Este componente nos muestra imagen, nombre, precio y cantidad por cada uno de los productos agregados al carrito. Además tiene un boton para remover ese producto del carrito.

### Checkout

En este componente encontramos de manera mas ordenada los productos del carrito seguidos de un formulario y un botón para finalizar la compra, luego de rellenar los campos nombre, teléfono y email, podremos pulsar en en dicho botón para que nos genere una orden con los datos del formulario y los productos del carrito. También nos reducirá el stock de los correspondientes productos, y por ultimo nos renderizara el id de la orden generada.

### ItemList e ItemListContainer 

Componentes que se encargan de renderizar la lista de productos (imagen, nombre y precio) dependiendo en que categoría nos encontremos. Si pulsamos en cualquiera de estos productos nos redirigira a ItemDetail.

### ItemDetail e ItemDetailContainer 

Estos componentes nos renderizan el producto que hayamos seleccionado en ItemList. Mostrándonos: nombre, descripción, stock (la cantidad o "sin stock" en caso que sea 0), precio y también el componente ItemCount, Si hiciéramos click en agregar al carrito se renderizara un nuevo botón que nos redirigirá al carrito.

### ItemCount

Este componente nos mostrara un contador con un botón para reducir la cantidad y otro para aumentarla y además el botón para agregar al carrito, este componente se desmontara cuando pulsemos en agregar al carrito. Si el producto en el que nos encontramos no cuenta con stock, el botón de agregar al carrito tendrá la propiedad disabled

### CartContext
Es el componente de contexto, contiene los productos que agreguemos al cart y una serie de funcionalidades relacionadas
