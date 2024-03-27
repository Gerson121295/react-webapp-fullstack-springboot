
import { useState } from 'react';
import { CartView } from './components/CartView';
import {CatalogView} from './components/CatalogView'

//Arreglos de la estructura del Json del CartItems
//Obtiene la información almacenada desde sessionStorage definida en CartView donde 'cart' es la key para acceder
// el getItem devuelve un String por lo que se debe convertir de String a un objeto usando JSON.parse()
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; //InitialCartItems mostrará los items con getItem o (||) muestra vacio el arreglo

/*
LocalStorage: SI queremos que perdure la informacion aun cerrando el navegador
SessionStorage: SI queremos que perdure la informacion unicamente cuando esta abierto el navegador aun asi recarquemos la pagina la info no se pierde
Para implementarlo cambiar "Local" por "Session"  "session"_Storage
*/

/* Estructura del JSON
  {
    product:{
      //tendra los campos del product
    },
    quantity:0
  } */

export const CartApp = () => {

  
  const [cartItems, setCartItems] = useState(initialCartItems) // se puede agregar aqui: || []); //se inicializa con el json de cartItems

  //Funcion para agregar productos al carro
  const handlerAddProductCart = (product) => {

    //Actualizar la cantidad de product
    const hasItem = cartItems.find((i) => i.product.id === product.id); //item(i), si el id del product del item === es igual al id que pasamos por argumento, si el item que se pasa por paramtro ya existe en los items,
    if(hasItem){//Evalua Si el producto a agregar al carro ya existe en el list del carro, aumenta la cantidad del producto
      
 /*      //Forma 1 de actualizar la cantidad de los productos usando filter
        setCartItems([
        ...cartItems.filter((i) => i.product.id !== product.id), //Si ya existe, Lo eliminamos con filter que crea un nuevo array donde incluye todos los items menos el id del producto que se recibe como parametro
        {
          product,
          quantity:hasItem.quantity + 1, //a la quantity le agregamos la cantidad del item que se agrego al carro + 1 
        }
      ]) 
*/
      //Forma 2 de actualizar la cantidad de los productos usando map mas mejor
      setCartItems(
        cartItems.map((i) => {  //Si ya existe, map devuelve un nuevo arreglo con los cambios
              if(i.product.id === product.id){ //recorre por cada item de productos seleccionados para ver si el id del producto del item es igual al id del producto que recibe como parametro si es igual aumenta la cantidad del product
                i.quantity = i.quantity + 1; //Si es igual el id item del product que han sido seleccionado con el id del producto que se recibe como parameto, aumenta en 1 la cantidad del item del product
              }
              return i; //el map siempre devuelve el objeto
          })
        ) 

    }else{ //Evalua Si el producto a agregar al carro no existe en el list del carro. Crea un nuevo Item
      setCartItems([...cartItems,  // ...cartItems (desestructurar los elementos que ya se tienen para no perderlos) y crear un nuevo arreglo y agregar un nuevo item que fue seleccionado
      {
        product, //product:product //product(nombre del atributo produc) : product(es el valor que se pasa por argumento) como se llaman igual para reducirlo solo escribir product
        quantity: 1,
      }
    ])

    }
  }

  //Funcion para eliminar producto del carro. Actualizamos los items del carro con 1 menos
  const handlerDeleteProductCart = (id) => { //recibe el id del product a eliminar
    setCartItems([
    ...cartItems.filter((i) => i.product.id !== id) //Lo eliminamos con filter que crea un nuevo array donde incluye todos los items menos el id del producto que se recibe como parametro
  ]);
}

    return (
      <>
        <div className="container my-4">
          <h3>Cart App</h3>
          {/* Llama al componente hijo ProductCardView a renderizarse y se le pasa la funcion para agregar productos al carro, 
          el hijo ProductCardView es el que devuelve el objeto product al padre para agregarlo a la funcion handlerAddProductCart que recibe el product 
          para actualizar el estado CartItems y agregar el product seleccionado  */}
          <CatalogView handler={(product) => handlerAddProductCart(product)} />
          {/*   <CatalogView handler={handlerAddProductCart}/>  */} {/*   Forma Optimizada  */}

          {cartItems?.length <= 0 ||    // ?(cart no sea null) y que no sea menor o igual a 0, se no mostrará la tabla, si es mayor a 0 si se muestra) 
          (<div className="my-4 w-50">        
          {/* LLama al componente hijo CartView y le pasa los valores cartItems por medio de la variable items,
            y por medio de la variable handlerDelete le pasa la funcion handlerDeleteProduct para eliminar item del carro 
          */}
            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/> 
          
          </div>)}
        </div>
      </>
    );
}

