
//UseReducer sirve para manejar los estados de los items del carro de compras de forma centralizada 

import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) => { //recibe el estado se inicializa de tipo arreglo y la accion 
  
    switch (action.type){
        case AddProductCart: // AddProductCart palabra clave para llamar o invocar la accion de agregar product al carro definida en itemsActions
            return [
            ...state,  // ...cartItems (desestructurar los elementos que ya se tienen para no perderlos) y crear un nuevo arreglo y agregar un nuevo item que fue seleccionado
                {
                    product: action.payload, //action.payload es el objeto product //product:product //product(nombre del atributo produc) : product(es el valor que se pasa por argumento) como se llaman igual para reducirlo solo escribir product
                    quantity: 1,
                }
            ];

        case UpdateQuantityProductCart: //palabra clave definida en: itemsActions
            return state.map((i) => {  //Si ya existe, map devuelve un nuevo arreglo con los cambios. //el payload es el objeto que se recibe desde el dispatch del padre CartApp
                if(i.product.id === action.payload.id){ //recorre por cada item de productos seleccionados para ver si el id del producto del item es igual al id del producto que recibe como parametro si es igual aumenta la cantidad del product

                //Si es igual el id item del product que han sido seleccionado con el id del producto que se recibe como parameto, aumenta en 1 la cantidad del item del product               
                return { //el map siempre devuelve un nuevo objeto con los nuevos datos
                    ...i, //elementos del item que tenia
                    quantity: i.quantity + 1, //actualizamos la cantidad. quantity = quantity del item + 1 se aumenta en 1 la cantidad del item product
                };
            }
                return i;
            });

        case DeleteProductCart:  //palabra clave definida en: itemsActions
            return [
                ...state.filter((i) => i.product.id !== action.payload) //Lo eliminamos con filter que crea un nuevo array donde incluye todos los items menos el id del producto que se recibe como parametro
              ];

        default: //si no cae en ninguno de los casos anteriores devuelve el por default
            return state;
    }
}


