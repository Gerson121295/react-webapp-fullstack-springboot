import PropTypes from 'prop-types'

//export const ClientView = ({nameClient, lastName, country, city, street, number}) => { //Componente hijo ClientView.jsx recibe props (valores) del cliente desde el padre InvoiceApp
    
export const ClientView = ({title, client}) => { //Forma 2: Componente hijo ClientView.jsx recibe props (valores) el objeto cliente desde el padre InvoiceApp
   
    //Desesctructurar el objeto client, variables almacenan los valores del objeto client para despues pasar la data por variables
   
     //Desestructurar el objeto cliente obtenido de getInvoice() y se guarda la data en las variables: name:nameClient(alias xq name ya existe), lastaName, address
     //const{ name:nameClient, lastName, address } = client;   //se da un alias al campo name de cliente xq ya existe esa variable: name:nameClient,

     //Desestructurar el objeto address de client obtenido de getInvoice() y se guarda la data en las variables: country, city, street, number 
     //const{ country, city, street, number } = address; 

    //Desestructuracion en una linea
    const{ name:nameClient, lastName, 
            address: { country, city, street, number }
        } = client; //agrega un alias: name:nameClient, desestructura el objeto: address: { country, city, street, number }

    return(
            <>
                <h3>{title}</h3>
                <ul className="list-group">
                    <li className="list-group-item active">{nameClient} {lastName}</li>
                    <li className="list-group-item">{country} / {city}</li>
                    <li className="list-group-item">{street} {number}</li>
                </ul>
            
            </>
        )
    }

//Validacion de variables del props
ClientView.propTypes={
    title:PropTypes.string.isRequired,
    client: PropTypes.object.isRequired  //valida el props recibido como objetc
    /* //Opcion donde en la funcion recibe las variables como props 
    nameClient: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    */
}