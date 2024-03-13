
//Promesas o Promises son para manejar tareas asincronas(paralelo a otra, tiene un delay, cierta demora)

//Fuera de parentesis son funciones por default, dentro de parentesis se especifica los metodos a importar
import {invoiceById} from './data/invoices'  

//Primero se ejecuta lo sincrono luego lo asincronas
//Promesa resive un resolve(si se resuelve) y un reject(si falla) manejar con un try catch

const promise = new Promise((resolve, reject) => { 

    setTimeout(() =>{ //simula un delay : simulando la conexion remota a un API para una peticion
        //primero se ejecuta esta tarea porque es sincrono no tiene delay
        //busca factura por id, si existe se ejecuta el resolve pasa al then si no  exite el id pasa al reject
        const result = invoiceById(2); 
        if(result){ //si result existe
            resolve(result); //si se resuelve invoca al then y le pasa result
        }else{
            reject('error: no existe la factura con ese id')
        }
    }, 2500) //2500 es el tiempo en milisegundo
});

//Promesas- then(es el success sale bien la promesa hace algo pasa algo) y catch (cuando ocurre un error en la promesa)
//Hacer algo 
promise.then((json) => {
    console.log(json);
    console.log('Realizada con exito alguna tarea con demora')
}).catch(console.error); //catch optimizado
/* //Catch 2
.catch((error) => {
    //console.error(error); //forma 1
    console.warn(error); //forma 2
})
*/

//opcion 2 mas optimizada de la promesa
//promise.then(console.log).catch(console.error);







