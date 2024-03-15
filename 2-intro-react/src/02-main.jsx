import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

//Manejando el DOM en React
//Babel - https://babeljs.io/ 
//se crea un elemento h1, null(no se le pasa props), se define el contenido;
const h1 = React.createElement('h1',null, 'Hola mundo'); 
//forma 2
const h2 =<div><ul><li>Hola mundo</li></ul></div>


ReactDOM.createRoot(document.getElementById('root')).render(
/*   <React.StrictMode> */
   
// {/* //aqui se define el componente principal a mostrar en el index.html conectado por 'root' */}
/*     <App />  


  </React.StrictMode> */
  //Renderiza los elementos html
  h2,
  h1
)
