import PropTypes from 'prop-types';

export const Book = ({book}) => (   //recibe book de la clase padre HelloWorldApp.jsx
    <div>{book}</div>
    )

//Configurando PropTypes para validaciones de las propiedades para que el tipo de dato que se espera sea el correcto
//para esto se debe instalar la dependencia: npm install prop-types
//Validacion para verificar si las variables de parametros definidad en la funcion, datos viene de la clase padre(HelloWorldApp.jsx), o asignar valores por defecto y definirlas como requerido

Book.propTypes = {
book: PropTypes.string//la variable book es de tipo String y es requerida
}