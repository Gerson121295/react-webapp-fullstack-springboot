
//Consumir API Rest con Fetch API

//Documentacion
//https://developer.mozilla.org/es/docs/Web/JavaScript
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

//Pagina tiene muchas API para consumir: https://jsonplaceholder.typicode.com/
//API a consumir: https://jsonplaceholder.typicode.com/users
//Fetch por defecto es de JavaScript y fetch y json() son una promesa por lo cual se tiene que manejar con then 

    const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

    //Forma 1: Metodo para listar la data o los usuarios
    /*
    httpClient.then(response => {
        //console.log(response);
        response.json().then(data => {
            console.log(data)
        })
    })
*/

//Forma 2: Optimizada - Metodo GET para listar la data o los usuarios
    httpClient
    .then(response => response.json())
    .then(data => console.log(data));


//Opcion 2: Consumir API Rest con Fetch API  usando Async/Await 
//Fetch y json() son promesas por lo que se define "await" antes para que espere, 
//cuando se usa await la funcion se debe marcar con async
const findAllUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json(); //esta linea de codigo optimiza la funcion, evita agregar las 2 siguientes 
    //const data = await response.json();
    //return data; //retornamos la data
}

const users = await findAllUsers(); //llamada del funcion para traer los users
console.log(users);
