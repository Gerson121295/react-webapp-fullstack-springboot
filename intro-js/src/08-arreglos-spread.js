
//Arreglos y el operador Spread en JavaScript
//let products =['mesa', 'silla', 'notebook', 'teclado'];
//products.push('pantalla LCD'); //agregar un elemento al arreglo.  push modifica el original
//products = products.concat('pantalla LG'); //agregar un elemento al arreglo.  concat crea y devuelve una nueva instancia por lo cual se tiene que asignar de nuevo a product

const products =['mesa', 'silla', 'notebook', 'teclado'];
products.push('pantalla LCD','monitor LCD'); //agregar un elemento al arreglo.  push modifica el original

//Forma usando concat para agregar elementos al array
const products2 = products.concat(['pantalla LG', 'ventilador']); //agregar un elemento al arreglo.  concat crea y devuelve una nueva instancia por lo cual se tiene que asignar de nuevo a products2

const fruits =['peras', 'manzanas', 'sandias', 'frutillas'];

//Se crea un array mercado que contiene los datos de fruits y products
//const mercado = [...products, ...fruits];
const mercado = [...products2, ...fruits, 'lechuga', 'papas', 'uvas']; //se pueden agregar mas elementos a parte de products y fruits

//Forma usando concat para agregar arrays
const mercado2 = products2.concat(fruits).concat('lechuga', 'papas', 'uvas'); //se pueden agregar mas elementos a parte de products y fruits


console.log(products); // mostrar el arreglo products
console.log(mercado); // mostrar el arreglo mercado
console.log(mercado2); // mostrar el arreglo mercado

