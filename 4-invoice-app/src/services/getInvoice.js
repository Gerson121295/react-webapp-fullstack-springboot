import { invoice } from "../data/invoice"

export const getInvoice = () => {

    //Forma1: Calcular el total de la factura
/*    
    let total = 0;
    invoice.items.forEach(item => { //variable item recorrera el for y se va ir iterando 
        total = total + item.price * item.quantity;
    })

    return {...invoice, total}; //crea un clon de la factura y retorna sus elementos de la factura. Al agregar: "total:total"  total de la propiedad de la factura y total de la variable se reduce agregando total.
*/

    //Forma2: Calcular el total de la factura
    //items es un arreglo por lo que se usa el metodo reduce
    const total = invoice.items
    .map(item => item.price * item.quantity) //items es un objeto por lo que clonamos el objeto con map y operamos sus datos y este nuevo arreglo se convierte en el resultado de precio * cantidad
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0) //El acumulador es el total que parte en 0,  y currentValues es: item.price * item.quantity; //el ultimo argumento indica que el acumulador inicia en 0

    return {...invoice, total}; //crea un clon de la factura y retorna sus elementos de la factura. Al agregar: "total:total"  total de la propiedad de la factura y total de la variable se reduce agregando total.



}
