
import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

//Hook que contiene la logica de ItemsCart

//Arreglos de la estructura del Json del CartItems
//Obtiene la información almacenada desde sessionStorage definida en CartView(no usando useReducer, reducer se define hook en cartApp) donde 'cart' es la key para acceder

// el getItem devuelve un String por lo que se debe convertir de String a un objeto usando JSON.parse()
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; //InitialCartItems mostrará los items con getItem o (||) muestra vacio el arreglo

/*
LocalStorage: SI queremos que perdure la informacion aun cerrando el navegador
SessionStorage: SI queremos que perdure la informacion unicamente cuando esta abierto el navegador aun asi recarquemos la pagina la info no se pierde
Para implementarlo cambiar "Local" por "Session"  "session"_Storage
*/

export const useItemsCart = () => {

  //Manejando los stados con Hook useReducer - Despachando acciones. UseReducer maneja muchos estados: cartItems(es el estado), dispatch(para modificar los estados) y useReducer(itemsReducer, initialCartItems) recibe la funcion de los casos y datos de iniciales.
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems); //dispacher maneja los estados, useReducer recibe como parametro la funcion "itemsReducer" creada, y recibe los datos iniciales de los estados "initialCartItem". 

  //UseEffect se ejecuta cuando cambie los cartItems y guarde en Session Storage
  useEffect(() => {
   //para que perdure la informacion unicamente cuando esta abierto el navegador aun asi recarquemos la pagina la info no se pierde
   sessionStorage.setItem("cart", JSON.stringify(cartItems)); //Recibe una key('cart') y solo guarda valores string por lo que items que es un objeto se convierte a string con JSON.stringify que convierte un objeto en una cadena
 }, [cartItems]);


 //Funcion para agregar productos al carro
 const handlerAddProductCart = (product) => {

   //Actualizar la cantidad de product
   const hasItem = cartItems.find((i) => i.product.id === product.id); //item(i), si el id del product del item === es igual al id que pasamos por argumento, si el item que se pasa por paramtro ya existe en los items,
   if(hasItem){//Evalua Si el producto a agregar al carro ya existe en el list del carro, aumenta la cantidad del producto
 
    //Usando useReducer
    //Forma 2 de actualizar la cantidad de los productos usando map mas mejor
     dispatch(
       {
         type:UpdateQuantityProductCart, //Case definido en la funcion itemsReducer y itemsActions
         payload: product, //el payload es el objeto a enviar en la funcion itemsReducer
       }
     );
   
   }else{ //Evalua Si el producto a agregar al carro no existe en el list del carro. Crea un nuevo Item

   //Usando useReducer
   dispatch({
     type: AddProductCart, //Case definido en la funcion itemsReducer y itemsActions
     payload: product,
   }); 

   }
 }

 //Funcion para eliminar producto del carro. Actualizamos los items del carro con 1 menos
 const handlerDeleteProductCart = (id) => { //recibe el id del product a eliminar

 //Usando useReducer
 dispatch(
   {
     type:DeleteProductCart, //Case definido en la funcion itemsReducer y itemsActions
     payload: id, //el payload es el objeto o atributo a enviar en la funcion itemsReducer
   }
 )
}

    return {
        //Devuelve el hook
        cartItems, //devuleve un atributo
        handlerAddProductCart, //devuelve funcion
        handlerDeleteProductCart //devuelve funcion
    }

}