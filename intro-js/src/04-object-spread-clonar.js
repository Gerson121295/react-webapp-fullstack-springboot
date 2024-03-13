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



//Operador Spread en Objetos

//Cuando se usa == se evalua solo el contenido. Cuando se usa === se valida el contenido y el tipo de dato.
const invoice2 = invoice; //asigna la data de invoice a invoice2
//const result = invoice == invoice2; //compara si el objeto invoice es igual a invoice2 si es igual retorna true sino false.
const result = invoice === invoice2; //compara si el objeto invoice es igual a invoice2 si es igual retorna true sino false.
//const result = invoice === '';
console.log(result);
    if(result) console.log(result) 
    else console.log('No son iguales');

invoice2.id =20; //al modificar invoice2 tambien se modifica el invoice ya que es la misma instancia, la misma referencia en memoria.
console.log(invoice.id);
console.log(invoice2.id);


console.log('------ operador Spread para Clonar una instancia de otra ------');
///Se usa el operador Spread en objetos para Clonar una instancia de otra para que al modificar la nueva no modifique la anterior

const invoice3 = {... invoice }; //...invoice - esparcimos los atributos de invoice con esto clonamos la factura original con el  nuevo objeto invoice3
const resultad = invoice === invoice3; //compara "===" si el objeto y el tipo de dato invoice es igual a invoice3 si es igual retorna true sino false.
console.log(resultad); //retorna false porque no son la misma instancia y no tienen la misma referencia en memoria
    if(resultad) console.log(resultad) 
    else console.log('No son iguales');

    invoice3.id =50; //al modificar invoice3 no se modifica el invoice ya que no es la misma instancia, no tiene la misma referencia en memoria.
    
    console.log(`invoice: ${invoice.id}`);
    console.log(`invoice3: ${invoice3.id}`);









