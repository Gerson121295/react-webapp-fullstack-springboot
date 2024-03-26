
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";

const invoiceInitial = {
    id: 0,
    name: '',
    client:{
        name:'',
        lastName: '',
        address:{
            country: '',
            city:'',
            street: '',
            number: 0
        },
    },
        company:{
            name: '',
            fiscalNumber: 0,
        },
        items:[] //item es un arreglo porque en la factura hay muchos items o articulos comprados   
    }


export const InvoiceApp = () => {

    //UseState para incrementar contador del id de producto
    const[counter, setCounter] = useState(4); //incializa en 4

    //Factura sea manejada por el estado de react
    const [invoice, setInvoice] = useState(invoiceInitial); //El estado inicial del useState es la estructura o el json de la factura
        

    //Estado para guardar los item en la pagina
    const[items, setItems] = useState([]); //items de la factura, inicializa con itemsInitial que es el alias de los items que viene de getInvoice de la factura.
 
    //Esta forma de obtener la factura afecta en el rendimiento por cada cambio en el estado del campo hace una llamada y se necesita que al llenar el campo haga solo 1 llamada.
    //const invoice = getInvoice();
    //console.log(invoice);

     //Estado para guardar los item en la pagina
     //const[items, setItems] = useState(itemsInitial); //items de la factura, inicializa con itemsInitial que es el alias de los items que viene de getInvoice de la factura.
 
    //Las variable: id, name, client, et. guarda los datos de la factura que se optiene por la clase service getInvoice()
    //const {id, name, client, company, total, items:itemsInitial} = invoice;  //Usando desestructuracion del objeto obtenemos los datos y los guardamos en las variables.
    
    const {id, name, client, company} = invoice;  //Usando UseEffect - Usando desestructuracion del objeto obtenemos los datos y los guardamos en las variables.
    const [total, setTotal] = useState(0); //para calcular el total de los items

    //Desestructurar el objeto cliente obtenido de getInvoice() y se guarda la data en las variables: name:nameClient(alias xq name ya existe), lastaName, address
    //const{ name:nameClient, lastName, address } = client;   //se da un alias al campo name de cliente xq ya existe esa variable: name:nameClient,

    //Desestructurar el objeto address de client obtenido de invoice() y se guarda la data en las variables: country, city, street, number 
    //const{ country, city, street, number } = address; 

    
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

    //Este componente solo se ejecuta una vez cuando se crea el componente. Obtendra las facturas
    useEffect(() => {
        const data = getInvoice(); //variable data guarda los datos de factura que se optiene por la clase service getInvoice()
        console.log(data);
        setInvoice(data); //en setInvoice guardammos la data que contiene las facturas obtenidas por getInvoice()
        setItems(data.items);
    }, []); //el [] vacio sig. que este efecto secundario (evento) del ciclo de vida cuando se crea el componente


        useEffect(() => {
            console.log('El precio cambio');

        }, [price]) //este useEffect se ejecuta cuando el estado del campo precio cambia


        //useEffect se ejecuta cuando cambia cualquier estado del campo del formulario
        useEffect(() => {
            console.log('El form cambio');

        }, [formItemsState]) //Se define el campo "formItemsState" condicion para ejecutar el useEffect


       //useEffect para cuando cambie la cantidad de items se recalcula el total
        useEffect(() => {
            setTotal(calculateTotal(items)); //Modifica el total con setTotal llama la funcion calculateTotal y le pasa los items para que calcule el total
            //console.log('El form cambio');
        }, [items]) //Se define el campo "items" condicion para ejecutar el useEffect


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


            setItems([...items, {  //a items, le agregaos el nuevo objeto
                id: counter,  //el id se incrementa con el dato del contador
                product:product.trim(), //.trim() quita los espacios antes y despues 
                price: +price.trim(), //forma 1: de convertir un dato String(se recibe del Formulario) a tipo numerico agregarle antes el signo: "+"
                quantity: parseInt(quantity.trim(), 10) //forma 2. de convertir un dato String(se recibe del Formulario) a tipo numerico con parseInt(recibe el valor, 10Base10)
            }]); //product (varlor del campo de invoice) productValue(variable del useState)
            

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

            setCounter(counter+1); //incrementa el valor del conunter en 1
            }
    
    
   return (
        <>
        <div className="container">
            <div className="card my-3">
                <div className="card-header">Ejemplo Factura</div> 
                    <div className="card-body">
                        {/* LLamada del componente hijo InvoiceView que tiene datos de factura: se le envia los valores(id, name) desde InvoiceApp el padre a invoiceView.jsx */}
                        <InvoiceView id={id} name={name}/>

                    <div className="row my-3">  {/* Este div hace una fila */}
                        <div className="col"> {/* Este div hace una columna de la fila anterior */}
                            <ClientView 
                            // Forma1: Desde el Padre InvoiceApp llama al component hija ClientView y le manda los parametros, esta la recibe como props
                            //nameClient={nameClient} lastName={lastName}
                            //country={country} city={city} street={street} number={number}

                            //Forma2: mandar solo el objeto client al hijo y este lo desestructurará
                            title="Datos del Cliente" client={client}
                            />
                    </div>

                        <div className="col"> {/* Este div hace una columna de la fila anterior */}
                           <CompanyView title="Datos de la Compania" company={company}/>
                        </div>
                    </div>
                        <ListItemsView title="Productos de la Factura" items={items}/>
                        <TotalView total={total} />

                        <form className="w-50" onSubmit={ onInvoiceItemsSubmit }> 

                            <input type="text" 
                                    name="product" 
                                    value={product} //permite limpiar el dato del campo
                                    placeholder="Product" 
                                    className="form-control m-3" 

                            /*  //Ejemplo del onChange agregado en cada input del formulario
                                    onChange={event => {console.log(event.target.value) //value es el valor, el target es el campo.
                                    setProductValue(event.target.value); //Se guarda el valor(value) que aparece en el campo(target) product
                                }}
                            */

                                //Input desacoplado: se llama a la funcion
                                //onChange={event => {onProductChange(event)} //forma 1
                                //onChange={onProductChange} //forma 2: Optimizada
                                onChange={onInputChange} //forma 2: usando el useState general para todos los campos
                            />

                            <input type="text" 
                                    name="price" 
                                    value={price} //permite limpiar el dato del campo priceValue
                                    placeholder="Price" 
                                    className="form-control m-3"
                                    
                                    //Input desacoplado: se llama a la funcion
                                    //onChange={ onPriceChange }    
                                    
                                    onChange={onInputChange} //forma 2: usando el useState general para todos los campos
                            />
                            <input type="text" 
                                    name="quantity" 
                                    value={quantity} //permite limpiar el dato del campo
                                    placeholder="Quantity"
                                    className="form-control m-3" 
                                    //onChange={ onQuantityChange} 
                                    onChange={onInputChange} //forma 2: usando el useState general para todos los campos
                            />

                            <button 
                                type="submit" 
                                className="btn btn-primary m-3"
                                >
                                    Nuevo Item
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>         
        </>
    )
}

