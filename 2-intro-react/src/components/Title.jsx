import PropTypes from 'prop-types';

export const Title = ({title}) => { //recibe title de la clase padre HelloWorldApp.jsx
    return <h1>{title}</h1>
}


//Configurando PropTypes para validaciones de las propiedades para que el tipo de dato que se espera sea el correcto
//para esto se debe instalar la dependencia: npm install prop-types
//Validacion para verificar si las variables de parametros definidad en la funcion, datos viene de la clase padre(HelloWorldApp.jsx), o asignar valores por defecto y definirlas como requerido

Title.propTypes = {
    title: PropTypes.string.isRequired, //la variable titulo es de tipo String y es requerida
}