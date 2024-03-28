import { useItemsCart } from './hooks/useItemsCart';
import { Navbar } from './components/Navbar';
import { CartRoutes } from './routes/CartRoutes';

export const CartApp = () => {

  //Usar el hook useItemsCart
  const{cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return (
      <>
      <Navbar/>
        <div className="container my-4">
          <h3>Cart App</h3>
        
        {/* Se LLama al component hijo(CartRoutes) a renderizarse y se le pasa por medio de variables las props */}
        <CartRoutes 
          cartItems={cartItems} 
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProductCart={handlerDeleteProductCart} 
        />
        </div>
      </>
    );
}

