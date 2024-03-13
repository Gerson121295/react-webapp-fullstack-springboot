
//Destructuracion de Arreglos

const users = ['Pepe', 'Ana', 'Maria','Juan', 'Sebastian' ,'Carlos', 'Josefa', 'Diana', 'Luis'];

//obtener los datos del arreglo users y guardarlos en las variables pepe, ana, maria, las comas, "," representan registros vacios que no se obtienen
//const[pepe, b, maria, , , carlos] = users; //las comas "," representan espacios para los registros siguiente que no se desean obtener

//las comas "," representan espacios para los registros siguiente que no se desean obtener, si se quiere obtener los demas registros siguientes se agrega: ...rest
const[pepe, b, maria, , , carlos, , ...rest] = users; //...rest (resto de elementos del arreglos serian: diana y luis)

console.log(`${pepe} ${b} ${maria} ${carlos} ${rest}` ); //mostrar los datos obtenidos
