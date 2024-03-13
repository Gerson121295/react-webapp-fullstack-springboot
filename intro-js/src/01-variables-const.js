
/*** Variables  ***/

//Se utiliza una plantilla Vite para el curso intro a JavaScript porque Vite ya tiene todo preparado incluye el server
var nombre = 'Pepe'; //LLA NO SE USA VAR PARA DECLARAR VARIABLES PERO FUNCIONA

let firstName = 'Gerson'; //se usa let para declarar variables
firstName = 'Martin'; //cambiar el valor de la variable
const apellido = 'Doe'; //declarar una variable constante no cambia su valor

const condicion = true; 
if(condicion){ //si condicion es = a true cambia el firstName a ale
/// firstName = 'Ale';
const lastname = ' ALe';
console.log(lastname);
}

//Forma 1 de mostrar en consola concatenando valores
console.log('hola: ' + firstName + ' '+ nombre+ ' ' + apellido);

//Forma 2 usando Template String: comillas invertidas interpolacion de String para mostrar valores
console.log(`hola: ${firstName} ${nombre} ${apellido}`);
