
//Objetos en JavaScript Moderno

//Objeto invoice Simple 
const invoice0 = {
    id0: 10,
    name0: 'Compras de oficina',
    date0: new Date(),
    client0: 'Jhon Doe',
    total0: 1000,
};
console.log(invoice0); //Muestra en consola el objeto invoice
console.log(invoice0.name0); //Muestra en consolas el nombre del objeto invoice

//Modificar el nombre del cliente del objeto invoice
invoice0.client0 = 'Pepe Roe'
console.log(invoice0.client0); //Muestra en consolas el nombre del objeto invoice

invoice0.total0 = 5000;
console.log(invoice0); //Muestra en consola el objeto invoice con los datos actualizados



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


//cambiar datos al name del client
invoice.client.name = 'ana'
//invoice.total = 10000
console.log(invoice);

//llamada a la funcion definida dentro del objeto invoice
const greeting = invoice.greeting();
console.log(greeting);

//Llamada de la funcion del total definida dentro del campo total del objeto "invoice"
console.log('Total: ' + invoice.total()); //forma 1 de mostrar el total
console.log(`Total: ${invoice.total()}`); //forma 2 de mostrar el total






