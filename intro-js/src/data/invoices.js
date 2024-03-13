
//Esta archivo será importado en otro para usar esta data, 
//para eso antes del metodo o constate se asigno como export

//arreglo invoice, tiene anidado y relacion con otros objetos{Cliente y }
//export const papper = {
const papper = { //Forma 1 de export es agregar export en el metodo a exportar
    producto: 'papper',
    price:100,
    quantity:10,
};

//export const invoices=[ //Forma 1 de export es agregar export en el metodo a exportar
const invoices=[
    {
    id: 1,
    name: 'Compras de oficina',
    client: {
        name:'Jhon',
        lastname:'Doe'
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
        papper, //arreglo creada arriva
    ],
    },
    {
        id: 2,
        name: 'Compras de computacion',
        client: {
            name:'Pepe',
            lastname:'Doe'
        },
        items:[ //datos de items(datos de productos comprados) de la factura
            {
                producto: 'keyboard',
                price:399,
                quantity:2,
            },
            {
                producto: 'screen 17',
                price:800,
                quantity:1,
            },
            {
                producto: 'cpu',
                price:1000,
                quantity:10,
            }
        ],
        },
        {
            id: 3,
            name: 'Compras de papeleria',
            client: {
                name:'Jhon',
                lastname:'Doe'
            },
            items:[ //datos de items(datos de productos comprados) de la factura
                {
                    producto: 'pencil',
                    price:50,
                    quantity:1,
                },
                papper, //arreglo creada arriva
            ],
            }
];

//Ejemplo de exportar funciones a clases:
//export const invoiceByNameClient = (clientName) => { //Forma 1 de export es agregar export en el metodo a exportar
const invoiceByNameClient = (clientName) => { 
    return invoices.find( i => i.client.name === clientName)
}

//Exportar funcion por defecto: Nota solo se puede tener una funcion por dafault
export default(clientName) => {
    return invoices.find( i => i.client.name === clientName)
}

// Metodo find para buscar una factura por id
const invoiceById = (id) => {
    return invoices.find( i => i.id === id)
} 

//Primero se ejecuta lo sincrono luego lo asincronas
//Promesa resive un resolve(si se resuelve) y un reject(si falla) manejar con un try catch

const findInvoiceById = (id) => {
    const promise = new Promise((resolve, reject) => { 

        setTimeout(() =>{ //simula un delay : simulando la conexion remota a un API para una peticion
            //primero se ejecuta esta tarea porque es sincrono no tiene delay
            //busca factura por id, si existe se ejecuta el resolve pasa al then si no  exite el id pasa al reject
            const result = invoiceById(id); 
            if(result){ //si result existe
                resolve(result); //si se resuelve invoca al then y le pasa result
            }else{
                reject('error: no existe la factura con ese id')
            }
        }, 2500) //2500 es el tiempo en milisegundo
    });
    return promise;
}




//Forma 2 de export es agregar export al final del codigo y especificar los metodos a exportar
export{
    papper, 
    invoices,
    invoiceByNameClient,
    //invoiceByNameClient as dafault //definir una funcion por defecto
    invoiceById,
    findInvoiceById
}