import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"
import PropTypes from 'prop-types'

export const CartRoutes = ({handlerAddProductCart, handlerDeleteProductCart, cartItems}) => { //Recibe props desde el padre CartApp
    return(
        <>
        <Routes>
            <Route path='catalog' 
                   element={
                  /* Llama al componente hijo ProductCardView a renderizarse y se le pasa la funcion para agregar productos al carro, 
                  el hijo ProductCardView es el que devuelve el objeto product al padre para agregarlo a la funcion handlerAddProductCart que recibe el product 
                  para actualizar el estado CartItems y agregar el product seleccionado  
                  */
                  //<CatalogView handler={handlerAddProductCart}/>  //Forma Optimizada 
                    <CatalogView handler={(product) => handlerAddProductCart(product)} />           
                  }
            />

           <Route path="cart" element={(
              cartItems?.length <= 0 ?    // cartItems?(cart no sea null) y es menor o igual a 0, se muestra el mensaje del div, si es mayor a 0 no esta vacio muestra la tabla
              <div className='alert alert-warning'>No Hay productos en el carrito</div>
              : //si cartItems es mayor a 0 y no esta vacio muestra la tabla
              (
                  <div className="my-4 w-50">        
                      {/* LLama al componente hijo CartView y le pasa los valores cartItems por medio de la variable items,
                      y por medio de la variable handlerDelete le pasa la funcion handlerDeleteProduct para eliminar item del carro 
                      */}
                    <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} /> 
                  </div>
                ) 
              )}
           />
           <Route path="/" 
                  element={
                    <Navigate to={'/catalog'} />}
            />
           
          </Routes>
        </>
    )
}

//Validacion de los datos que se reciben como props
CartRoutes.propTypes = {
    handlerAddProductCart: PropTypes.func.isRequired,
    handlerDeleteProductCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired
}