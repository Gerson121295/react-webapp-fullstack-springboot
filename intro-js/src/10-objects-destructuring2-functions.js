
//Destructuracion del Objeto en funciones

const user = {
    username : 'andres',
    email:'correo@gmail.com',
    age:20,
    ranking:9,
}

//Forma 1: Obtener los datos del objeto user en una funcion
const detail = (user) =>{
    const{ username, email} = user; //del objeto user obetenemos los datos username y email y los guarda en esas variables
    console.log(`El detalle del usuario: ${username} con email ${email}`);
}

//Forma 2: Optimizada de obtener los datos del objeto user en una funcion
const detail2 = ( {username, email} ) => { //del objeto user obetenemos los datos username y email y los guarda en esas variables
    console.log(`El detalle del usuario: ${username} con email ${email}`);
}

//Forma 3: Optimizada de obtener los datos del objeto user en una funcion
const detail3 = ( user) => { //del objeto user obetenemos los datos username y email
    console.log(`El detalle del usuario: ${user.username} con email ${user.email}`);
}

detail(user); //llamamos al metodo detail y se le envia el user
detail2(user); //llamamos al metodo detail y se le envia el user
detail3(user); //llamamos al metodo detail y se le envia el user
