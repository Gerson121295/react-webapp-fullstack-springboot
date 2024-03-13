
//Funciones

function sayHello() {
    const greeting = 'Hola mundo function!';
    return greeting;
    //console.log('Hola mundo function!');
}
const result = sayHello(); //result guarda el resultado de la funcion
console.log(result); //mostramos en consola el contenido de result
console.log(sayHello()); //forma mostrando directamente la funcion

//Funcion con parametros
function sayHello2(firstName, edad) {
    const greeting = `hola! ${firstName} edad: ${edad}`;
    return greeting;
}
console.log(sayHello2('Gerson',25)); //muestro la funcion y se pasa el nombre del parametro


//Funcion de flecha o Arrow function
const sayHello3 = (name='Pepe', age = 0) => {
    const greeting = `Hola: ${name} edad ${age}`;
    return greeting;
}
console.log(sayHello3('Andres',10));


//Funcion de flecha o Arrow function: para varias lineas se usa las flechas
const sayHello4 = (name='Pepe', age = 20) => {
    return `Hola: ${name} edad: ${age}`;
}
console.log(sayHello4('Andres',10));

//Funcion de flecha o Arrow function: para una linea de codigo no usar las flechas
const sayHello5 = (name='Pepe', age = 20) => `Hola: ${name} edad: ${age}`;
console.log(sayHello5('Andres',30)); //Forma1: de mostrar el resultado de la function

const resul = sayHello5('Andres',30);
console.log(resul); //Forma2: de mostrar el resultado de la function

//Funcion de flecha o Arrow function: SUMAR - para una linea de codigo no usar las flechas
//const add = (a=0, b=0) => {return a + b };
const add = (a=0, b=0) => `el resultado es: ${a + b}`; //Forma2: const add = (a=0, b=0) => a + b;
console.log(add(5,5));





