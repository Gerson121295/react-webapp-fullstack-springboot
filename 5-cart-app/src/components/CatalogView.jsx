import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";
import {PropTypes} from 'prop-types';

//Recibe props handler la funcion para agregar productos al carro desde su padre CartApp.jsx la cual CatalogView 
//se lo pasara a su hijo ProductCardView el cual tiene el boton para eleccionar el product a agregar al carro y luego 
//ProductCardView  le pasa el product a su padre CatalogView y este se lo pasa a su padre CartApp quien actualizara el estado de CartItems
export const CatalogView = ({ handler }) => { 

      //Maneja el estado de products
      const [ products, setProducts] = useState([]); //useState([]) se inicializa el arrego vacio, products es el arreglo para products y setProducts es la que modifica al products

      //UseEffect para que se ejecute una vez al crear el componente y traer los datos de products
      useEffect( () => {
          setProducts(getProducts()); //con setProducts guarda los productos obtenidos por medio de la funcion getProducts del service en products.
      }, []); //[] significa que se ejecutará siempre cuando se crea el componente una unica vez
  

    return(
        <>
        <div className="row">
            {/* Con map iteramos cada product, map agregamos la etiqueta html que queremos renderizar por cada producto */}
            {products.map((prod ) => ( //prod es el nombre del objeto producto, como se va a repetir n veces es necesario darle un Key
                <div className="col-4 my-2" key={prod.id}>

                    {/* LLama al componente hijo ProductCardView y le pasa los valores del product */}
                    <ProductCardView
                        handler={handler} //CatalogView envia la funcion handler recibida del padre a su hijo para obtener los productos que fueron seleccionados a agregar al carro.
                        id={prod.id}
                        name={prod.name} 
                        description={prod.description} 
                        price={prod.price} 
                    />

                </div>
              ))}
          </div>
        </>
    );
}


CatalogView.propTypes = {
    handler : PropTypes.func.isRequired
}