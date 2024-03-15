
import PropTypes from 'prop-types';

export const UserDetails = ({user, id}) =>   //recibe user y el id de la clase padre HelloWorldApp.jsx
    ( 
    <div>Que tal! {user.name} {user.lastname}  con el id={id + 5} </div>
    )


    //Configurando PropTypes para validaciones de las propiedades para que el tipo de dato que se espera sea el correcto
//para esto se debe instalar la dependencia: npm install prop-types
//Validacion para verificar si las variables de parametros definidad en la funcion, datos viene de la clase padre(HelloWorldApp.jsx), o asignar valores por defecto y definirlas como requerido

UserDetails.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}