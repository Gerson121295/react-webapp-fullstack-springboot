
//Arreglos en JavaScript
const products =['mesa', 'silla', 'notebook', 'teclado'];
products.push('pantalla LCD'); //agregar un elemento al arreglo
console.log(products); // mostrar el arreglo

//Metodos para iterar el arreglo products

//Recorre el arreglo usando forEach recibe un callback funcion para operar recibe el elemento
//products.forEach(function(el){   //forEach usando funcion 
products.forEach((el) => {   //forEach usando funcion flecha
    console.log(el)
})

//forEach usando funcion flecha
products.forEach((el) => console.log(el))

//forEach usando funcion flecha mas optimizada
products.forEach(console.log)

//Otra forma de for para recorrer el arreglo.
for(const prod of products){ //establece el tipo de dato a prod de products(el arreglo a iterar)
    console.log(prod) //lista cada product
}

//Tipico for utilizado
for(let i = 0; i < products.length; i++){
    const element = products[i];
    console.log(element)
}

console.log(products[4]);

