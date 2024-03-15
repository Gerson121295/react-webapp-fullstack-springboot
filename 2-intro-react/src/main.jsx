import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelloWorldApp} from './HelloWorldApp'
import { CounterApp } from './contadorApp/CounterApp'

//Manejando el DOM en React

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode> 
   {/* Seccion - Intro a React js - Aprender sobre Variables - Utiliza carpeta components*/}

{/* //aqui se define el componente principal a mostrar en el index.html conectado por 'root' */}

{/* main.jsx es la clase padre y desde aqui se le puede mandar datos a la clase hija HelloWorldApp por medio
de su etiqueta.
 Se mando por medio de variable user el valor 'Pepe' a la clase hija HelloWorldApp la cual la recibe usando
props como argumento en la funcion: function HelloWorldApp(props){  
tambien se le pueden mandar mas parametros:

-- al enviar el id de esta forma: id='1' se define como tipo String 
-- y para definirlo de tipo numerico se debe definir asi: id={1}
-- Ejemplo de definir de tipo String: user={'Pepe'}
-- Ejemplo de definir de tipo Object: user={{name:'Pepe', lastname:'Doe'}}
*/}


  {/* <HelloWorldApp user={'Pepe'} id={1} /> */}

  <HelloWorldApp 
  user={{name:'Pepe', lastname:'Doe'}} 
  id={1}
  //title= {'Hola mundo'} 
  /> 



  {/* Seccion 4- Aplicacion Contador(useState) - Utiliza carpeta contadorApp */}

  <CounterApp value={2}/>

  </React.StrictMode> 

)
