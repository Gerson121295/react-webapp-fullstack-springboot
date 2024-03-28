import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { calculateTotal } from '../services/productService';

export const CartView = ({handlerDelete, items}) => { //recibe props items datos de products y la funcion handlerDelete para eliminar product del padre CartApp
  
  //Actualizar el total del carrito
  const [total, setTotal] = useState(0);

  //UseEffect se ejecuta cuando cambie los items que recibe del padre
  useEffect(() => {
    setTotal(
      calculateTotal(items) //Funcion calcula el total de los products definida en productService
    );
    //Code Cuando se utiliza useState
    //para que perdure la informacion unicamente cuando esta abierto el navegador aun asi recarquemos la pagina la info no se pierde
    //sessionStorage.setItem("cart", JSON.stringify(items)); //Recibe una key('cart') y solo guarda valores string por lo que items que es un objeto se convierte a string con JSON.stringify que convierte un objeto en una cadena
  }, [items]);


  
  //Funcion para eliminar un product del carro de compras
  const onDeleteProduct = (id) => {
    //console.log('Eliminando Product')
    handlerDelete(id);
  }
  
  return (
    <>
      <h3>Carro de Compras</h3>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => ( //map iteramos html de los items de products
             <tr key={item.product.id}>
             <td>{item.product.name}</td>
             <td>{item.product.price}</td>
             <td>{item.quantity}</td>
             <td>{item.quantity * item.product.price}</td>
             <td>
                <button 
                className='btn btn-danger'
                onClick={() => onDeleteProduct(item.product.id)}
                >
                  eliminar
                </button>
             </td>
           </tr>
          ))}
         
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}


CartView.propTypes = {
  items: PropTypes.array.isRequired,
  handlerDelete: PropTypes.func
}

