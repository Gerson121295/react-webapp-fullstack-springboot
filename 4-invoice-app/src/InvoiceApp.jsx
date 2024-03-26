
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

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

    //UseState Boton para mostrar u ocultar el formulario, se inicializa en false
    const[activeForm, setActiveForm] = useState(false);

    //UseState para incrementar contador del id de producto
    const[counter, setCounter] = useState(4); //incializa en 4

    //Factura sea manejada por el estado de react
    const [invoice, setInvoice] = useState(invoiceInitial); //El estado inicial del useState es la estructura o el json de la factura
        
    //Estado para guardar los nuevos items en la pagina
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

    //Este componente solo se ejecuta una vez cuando se crea el componente. Obtendra las facturas
    useEffect(() => {
        const data = getInvoice(); //variable data guarda los datos de factura que se optiene por la clase service getInvoice()
        console.log(data);
        setInvoice(data); //en setInvoice guardammos la data que contiene las facturas obtenidas por getInvoice()
        setItems(data.items);
    }, []); //el [] vacio sig. que este efecto secundario (evento) del ciclo de vida cuando se crea el componente

       //useEffect para cuando cambie la cantidad de items se recalcula el total
        useEffect(() => {
            setTotal(calculateTotal(items)); //Modifica el total con setTotal llama la funcion calculateTotal y le pasa los items para que calcule el total
            //console.log('El form cambio');
        }, [items]) //Se define el campo "items" condicion para ejecutar el useEffect


        //funcion para agregar nuevos items a la factura.
        const handlerAddItems = ({ product, price, quantity }) => {
          setItems([
            ...items,
            {
              //a items, le agregas el nuevo objeto
              id: counter, //el id se incrementa con el dato del contador
              product: product.trim(), //.trim() quita los espacios antes y despues
              price: +price.trim(), //forma 1: de convertir un dato String(se recibe del Formulario) a tipo numerico agregarle antes el signo: "+"
              quantity: parseInt(quantity.trim(), 10), //forma 2. de convertir un dato String(se recibe del Formulario) a tipo numerico con parseInt(recibe el valor, 10Base10)
            },
          ]); //product (varlor del campo de invoice) productValue(variable del useState)

          setCounter(counter + 1); //incrementa el valor del conunter en 1
        };

        //Funcion para eliminar un item
        const handlerDeleteItem = (id) => { //pasamos como argumento el id del item a eliminar
            //filter devuelve un nuevo arreglo sin el id que se envia como parametro por lo que en el nuevo arreglo ese id de ese item estaria eliminado.
            setItems(items.filter(item => item.id !== id)) //en item validamos que el id a buscar no se incluya en el nuevo arreglo
        }

        //Funcion cambia el estado del boton usando el useState, si esta false cambia true o viceversa
        const onActiveForm = () => {
            setActiveForm(!activeForm); //cambia el valor de activeForm si esta false cambia true o viceversa
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
                        {/* llama al compoente hijo ListItemsView se envia los valores, se envia el metodo handlerDelete, en cual desde el hijo ListItemsView, el padre(InvoiceApp) recibe el id del item a eliminar usando el metodo handlerDeleteItem(id) */}
                        <ListItemsView title="Productos de la Factura" items={items} handlerDeleteItem ={ id => handlerDeleteItem(id) } />
                        <TotalView total={total} />

                        {/* Boton para mostrar u ocultar el formulario */}
                        <button 
                        className="btn btn-secondary"
                        onClick={onActiveForm} //llama a la funcion que cambia el estado de activeForm, false no muestra el form y true muestra el form
                        > 
                        {/* Valida: si es diferente de activeForm "esta en false" muestra mensaje Agregar Item (el form no esta activo) si no estra true el form esta activo y muestra 'Ocultar Formulario' */}
                        {!activeForm ? 'Agregar Item' : 'Cerrar Form'} 
                        </button>

                        {/* Valida si el formulario es false o no esta activo muestra '' "nada" si es True o esta activo, muestra el formulario. */}
                        {!activeForm ? '' :
//                       {/* Llama a la clase hija FormItemsView y se le pasa por medio de la variable handler la funcion handlerAddItems para agregar items al form*/}
//                       {/* newItem recibe los datos "formItemsState" que el component hijo envia al padre y estos datos se pasa al metodo handlerAddItems que recibe newItem para agregar un nuevo item al formulario */}
//                       {/* <FormItemsView handler = { (newItem) => handlerAddItems(newItem) } />  */}  {/* Forma1: el proceso del hijo recibe los datos que el padre necesita para agregarlo a la funcion handlerAddItems y crear un nuevo item */}
                         <FormItemsView handler = { handlerAddItems } />  // {/* Forma2: optimizada */}
                        }

                        {/* Forma 2 optimizada: Si no existe no muestre nada, o si es diferente a false que muestre el form */}
                        {/*     {!activeForm || <FormItemsView handler={handlerAddItems}  /> }      */}


                    </div>
                </div>
            </div>         
        </>
    )
}

