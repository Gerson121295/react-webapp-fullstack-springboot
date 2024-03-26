import PropTypes from 'prop-types'
import {RowItemView} from "./RowItemView"

export const ListItemsView = ({title, items, handlerDeleteItem }) => { //recibe props del padre InvoiceApp
    return(
        <>
         <h4>{title}</h4>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* items es un arreglo por lo que se debe recorrer para mostrarlo 
                        map convierte un valor que esta en el arreglo y lo comvierte a un tipo de dato en este caso
                        map toma item y cada item y la salida del item va a ser con formato html
                        map no modifica el arreglo original este crea un nuevo arreglo con los datos modificados.
                        */}

        {/*                 {items.map(item => { //item es un parametro que representa los datos del array items
                            return( 
                            <tr key="{ item.id }">
                                <td>{item.product}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                            </tr>
                            ); 
        */}
                        {/* Forma usando desestructuracion del objeto item dentro del map */}
                        {items.map(({id, product, price, quantity}) => {  //incluso podemos quitar las llaves y el return solo dejar el parentesis(tr) esto porque el tr es una sola etiqueta
                            return(
                            //Llama y se envia datos al componente Hijo RowItemView que tiene las lineas de la factura
                            //Del componente padre(ListItemsView) que recibio de su padre(InvoiceApp) envia a su hijo RowItemView la funcion para eliminar un item de la factura
                            <RowItemView 
                                key={id} 
                                id={id}
                                product={product} 
                                price={price} 
                                quantity={quantity} 
                                //Funcion para eliminar un item
                                handlerDeleteItem = {id => handlerDeleteItem(id)} 
                            />

                            )
                        })}
                    </tbody>
                </table>
        </>
    )
}

ListItemsView.propTypes={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    handlerDeleteItem: PropTypes.func
}
