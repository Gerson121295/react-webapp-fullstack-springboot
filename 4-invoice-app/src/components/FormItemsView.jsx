import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const FormItemsView = ({ handler }) => { //componente hijo recibe por props handler envia desde el padre InvoiceApp el cual es una funcion para agregar nuevos items

    //El UseState sirve  para guardar el estado "datos" de los campos del formulario para crear producto
     
    //useState('') devuelve 1 arreglo con 2 cosas: el productValue que es un arreglo con nuestra data, 
    //y setProductValue una funcion para modificar el estado del productValue,
    //useState('') recibe de parametro el cual sera su valor inicial o por defecto es 'vacio' nada como es string Product
/* 
    const [productValue, setProductValue] = useState(''); //campo Product, se inicializa en vacio '' 
    const [priceValue, setPriceValue] = useState(''); //campo Price
    const [quantityValue, setQuantityValue] = useState(''); //campo Quantity
*/
    //Un solo estado para el formulario - useState invoiceItemsState Hace la funcionalidad de los useState: product, price, quantity
    const[formItemsState, setFormItemsState] = useState({
        //Datos que pueblan en el formulario
        product: '',
        price: '',
        quantity:'',
    });

    //Desestructuracion del objeto useState formItemsState y guarda los datos en las variables: product, price, quantity
    const {product, price, quantity} = formItemsState;

    useEffect(() => {
        //console.log('El precio cambio');
    }, [price]) //este useEffect se ejecuta cuando el estado del campo precio cambia


    //useEffect se ejecuta cuando cambia cualquier estado del campo del formulario
    useEffect(() => {
        //console.log('El form cambio');
    }, [formItemsState]) //Se define el campo "formItemsState" condicion para ejecutar el useEffect


     /*   //Reduccion de estas 3 funciones a una sola 
    //Funcion para cambiar el evento del producto usando Event sin desestructurarlo
    const onProductChange = (event) => {
        console.log(event.target.value) //value es el valor, el target es el campo.
        setProductValue(event.target.value); //Se guarda el valor(value) que aparece en el campo(target) product
    }

    //Funcion para cambiar el evento del precio, desestructurando event y dejar target
    const onPriceChange = ({ target }) =>{ //desestructuracion de event y extraer {target} del obejto event
        console.log(target.value)//value es el valor, el target es el campo.
        setPriceValue(target.value); //Se guarda el valor(value) que aparece en el campo(target) price
    }

    //Funcion para cambiar el evento de la cantidad
    const onQuantityChange = ({ target }) =>{ //desestructuracion de event y extraer {target} del obejto event
        console.log(target.value)//value es el valor, el target es el campo.
        setQuantityValue(target.value); //Se guarda el valor(value) que aparece en el campo(target) quantity
    }
*/

        //Funcion para modificar el estado completo del campo. cambiar el evento del los campos product, price y quantity del formulario 
        const onInputChange = ({ target:{ name, value }}) => { //Del objeto event se destructuro el target y del target(campo del form) se desetructuro el name y value
            //console.log(name) //value es el valor del campo, el target es el campo.
            //console.log(value)

            setFormItemsState({ //cambiamos el estado del campo
                ...formItemsState, //el arreglo que no se esta modificando
                [name]:value //el campo que se esta modificando, name es el nombre del campo del input del form
       });
    }


    const onInvoiceItemsSubmit = (event) => {
        //Debido al useState general para campos del form a todos los campos que llevaban value se elimino value. productValue, priceValue, quantityValue
            event.preventDefault(); // preventDefault() permite que el formulario no se envie
            //mantenemos datos "los objetos" que se tenia de items y vamos a crear un nuevo objeto con los datos del estado que tiene los 
            //valores de productValue, priceValue, quantityValue esto asignado valores de las variables de los campos de la factura invoice
            
            //Validacion de los campos del formulario no vallan vacios: Antes productValue
            if(product.trim().length <=1 ) return; //Trim quita espacio, el nombre del producto debe tener mas de 1 caracter
            if(price.trim().length <=1 ) return;
            if(isNaN(price.trim())) { //isNaN is not a number
                alert('Error el precio no es un numero')
                return;
            }

            if(quantity.trim().length <1){ //quantityValue
                alert('Error la cantidad tiene que ser mayor a 0')
                return;
            } 
            //if(isNaN(quantityValue.trim())) return; //isNaN is not a number
            if(isNaN(quantity.trim())) { //isNaN is not a number
                alert('Error el precio no es un numero')
                return;
            }

            //Usamos la funcion recibida del padre para asignar nuevos items a la factura
            handler(formItemsState); //funcion handler recibe formItemsState que contiene los datos del form
   

            //Limpiar el formulario luego de haber enviado los datos
/*          setProductValue('');
            setPriceValue('');
            setQuantityValue(''); 
*/

            //Limpiar el formulario usando el useState feneral para todos los campos
            setFormItemsState({
                product: '',
                price: '',
                quantity:'',
            })
    }


    return (
      <>
        <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
          <input
            type="text"
            name="product"
            value={product} //permite limpiar el dato del campo
            placeholder="Product"
            className="form-control m-3"
/*      //Ejemplo del onChange agregado en cada input del formulario
        onChange={event => {console.log(event.target.value) //value es el valor, el target es el campo.
        setProductValue(event.target.value); //Se guarda el valor(value) que aparece en el campo(target) product
    }}
*/
            //Input desacoplado: se llama a la funcion
            //onChange={event => {onProductChange(event)} //forma 1
            //onChange={onProductChange} //forma 2: Optimizada
            onChange={onInputChange} //forma 2: usando el useState general para todos los campos
          />

          <input
            type="text"
            name="price"
            value={price} //permite limpiar el dato del campo priceValue
            placeholder="Price"
            className="form-control m-3"
            //Input desacoplado: se llama a la funcion
            //onChange={ onPriceChange }

            onChange={onInputChange} //forma 2: usando el useState general para todos los campos
          />
          <input
            type="text"
            name="quantity"
            value={quantity} //permite limpiar el dato del campo
            placeholder="Quantity"
            className="form-control m-3"
            //onChange={ onQuantityChange}
            onChange={onInputChange} //forma 2: usando el useState general para todos los campos
          />

          <button type="submit" className="btn btn-primary m-3">
            Nuevo Item
          </button>
        </form>
      </>
    );
}

FormItemsView.propTypes = {
    handler: PropTypes.func,
}


