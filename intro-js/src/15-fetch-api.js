
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
/*    httpClient
    .then(response => {
        return response.json().then(data => console.log(data));
    })
*/

//Forma 3: Optimizada - Metodo GET para listar la data o los usuarios
    httpClient
    .then(response => response.json())
    .then(data => console.log(data));

