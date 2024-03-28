import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './CartApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* etiqueta para rutas de la app, todo lo que este dentro de esta etiqueta funcionará el sistema de rutas */}
      {/* Llama al componente hijo CartApp */}
      <CartApp />
    </BrowserRouter>
  </React.StrictMode>
);
