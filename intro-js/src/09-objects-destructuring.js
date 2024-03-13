
//Destructuracion de Objeto

const user = {
    username : 'andres',
    email:'correo@gmail.com',
    age:20,
    ranking:9,
}

//Forma 1: Optimizada de obtener los datos del user
const{ username, ranking, age} = user; //del objeto user obetenemos los datos username y ranking y los guarda en esas variables

//Forma 2 de obtener los datos del user
/*     const username = user.username;
    const ranking = user.ranking;
    const age = user.age; 
*/

//Mostramos los datos destructurados del objeto user
console.log(`${username} tiene ${age} años de edad`);
console.log(ranking);
