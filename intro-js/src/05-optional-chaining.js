//Relaciones de Objetos y metodos

//Objeto invoice, tiene anidado y relacion con otros objetos{Cliente y }
const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id:2,
        name:'Jhon',
        lastname:'Doe',
        age:20
    },
    items:[ //datos de items(datos de productos comprados) de la factura
        {
            producto: 'keyboard',
            price:399,
            quantity:2,
        },
        {
            producto: 'mouse',
            price:200,
            quantity:1,
        },
        {
            producto: 'paper',
            price:100,
            quantity:10,
        }
    ],
    //total: 1000, total estatico
    //calcula el total con una funcion basado en precio de cada item y cantidad de producto 
    total: function(){ 
        let total = 0;
        this.items.forEach(item => { //recorre los items de invoice: item por cada elemento
            total = total + item.price * item.quantity; //va a sumar por cada item:  (precio *cantidad) lo guarda en total y asi sucesivamente por cada item
    });
    return total;
},
    greeting:function(){ //el objeto invoice tiene una funcion que saluda a un cliente
        return`Hola ${this.client.name}`;
    }
};

    //Operador Optional Chaining
    //Sirve API REST, marcar un atributo como optional para que no de error por si no viene y no afecte la ejecucion del programa
    console.log('---- Operador Optional Chaining  ?----');
    //para agregar el operador Optional o indefinido es agregar el signo: ?  para validar si un campo viene sino viene no laze un error si no que muestre undefined y no lanze error

    console.log(invoice.client?.name); //si viene el client que muestre el nombre del cliente sino no afecte la ejecucion agrega "undefined" no lanze un error

    console.log(invoice.company?.name); //Forma 1 agregando el simbolo pregunta ?

    //Forma 2: valida si el campo company invoice viene o si es diferente de undefined si no muestra mensaje, esto para que no afecte la ejecucion 
    if(invoice.company != undefined && invoice.company.name){
        console.log('Perfecto!!!')
    }else{
        console.log('No viene la empresa')
    }

