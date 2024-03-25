
import PropTypes from 'prop-types';

//Componente para vista de la factura que sera llamado en InvoiceApp

export const InvoiceView = ({id, name}) => { //Recibe props(valores) del componente padre InvoiceApp
    return (
      <>
        <ul className="list-group">
          {/* const invoice = getInvoice();   Acceder a los datos del objeto usando invoice */}
            {/* 
                <li>Id: {invoice.id}</li> 
                <li>Name: {invoice.name}</li>   
            */}
          {/* Usando las variables que guardan los datos del objeto Factura que se obtiene por getInvoice(). */}
          <li className="list-group-item">Id: {id}</li>
          <li className="list-group-item">Name: {name}</li>
        </ul>
      </>
    );
}

//Validacion de datos que recibe de props


InvoiceView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}
