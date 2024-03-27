import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './CartApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  {/* Llama al componente hijo CartApp */}
    <CartApp />

  </React.StrictMode>,
)
