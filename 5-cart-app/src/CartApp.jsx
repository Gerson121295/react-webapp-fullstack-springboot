
import { CartView } from './components/CartView';
import {CatalogView} from './components/CatalogView'
import { useItemsCart } from './hooks/useItemsCart';

export const CartApp = () => {

  //Usar el hook useItemsCart
  const{cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

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

