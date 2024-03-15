import { useState } from "react";

export const CounterApp = ({value}) => {  //por props el value viene desde el componente padre main.jsx 

//Implementado Hook useState 
//El useState es para mantener el estado de nuestro componente, y va a renderizar solamente el
//elemento HTML que corresponda(en este caso es h2), no toda la pagina o componente.

    //useState(0) recibe de parametro el cual sera su valor inicial , 
    //useState(0) devuelve 1 arreglo con 2 cosas: el counter que es un arreglo con nuestra data, 
    //y setCounter una funcion para modificar el estado del counter, permite hacer "counter = counter + 1;" 
    //const [counter, setCounter] = useState(3); 
    const [counter, setCounter] = useState(value); //el valor incial viene desde el componente padre main.jsx 

    //Funcion para incrementar llamada en el boton incrementar contador + 1
    const counterIncrement = () => {
            
            //setCounter(counter + 1); //Forma 1: setCounter modifica counter sumando 1, cada vez que la funcion sea llamada. por lo que al darle clic aumentará counter en 1 y asi sucesivamente. //counter = counter + 1;
            setCounter(c => c + 1); //Forma 2: con callback: c es el valor  inicial, c =>(guarda la operacion entre) c(5 es el valor inicial) + 1; 
            
           // console.log('Click: ' + counter)
        }

    return(
        <>
        <h2>El valor del contador es { counter } </h2>
            {/* <button onClick={() => {counterIncrement()}}>incrementar contador + 1</button> */}
            {/* <button onClick={() => counterIncrement()}>incrementar contador + 1</button> */}
            <button onClick={counterIncrement}>incrementar contador + 1</button> {/* como la funcion counterIncrement no recibe parametros se puede optimizar de esta forma  */}
        
        </>
    )
}