
//Arreglos el metodo map
//arreglo invoice, tiene anidado y relacion con otros objetos{Cliente y }
const papper = {
    producto: 'papper',
    price:100,
    quantity:10,
};

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

//Iterar el arreglo usando el map
//el forEach sirve para mostrar, iterar es imperativo es un procedimiento no modifica nada
//El map (es declarativo, devuelve algo con algun calculo o modificacion) recibe el objeto se puede hacer 
//algo con el despues de cada iteracion, el map devuelve el objeto, podemos modificar el objeto pero no es el 
//original, el que se modifica si no el que map crea "un nuevo objeto"
// para no modificar el objeto original y mantenerlo. La copia es la que se edita.

//retorna el arreglo modificado no modifica el original crea uno nuevo
const invoicesModificado = invoices.map(i => {
    return i; //retorna el objeto modificado
})

//retorna solo el nombre de la factura del arreglo modificado
const invoicesName= invoices.map(i => {
    return i.name; 
})

//retorna solo el nombre del cliente del arreglo modificado
const invoicesClient= invoices.map(i => {
    return i.client.name; 
})

console.log(invoicesModificado);
console.log(invoicesName);
console.log(invoices);
console.log(invoicesClient);


//Arreglos métodos find, filter y otros

// Metodo find para buscar una factura por id
const invoiceById = invoices.find( i => i.id ===3)
    console.log(invoiceById)

   // Metodo find para buscar una factura por nombre de la factura
const invoiceByName = invoices.find( i => i.name === 'Compras de oficina')
console.log(invoiceByName) 

   // Metodo find para buscar una factura por nombre del cliente de la factura
   const invoiceByNameClient = invoices.find( i => i.client.name === 'Pepe')
   console.log(invoiceByNameClient) 

// Metodo filter - Si la condicion se cumple va a crear un nuevo arreglo con elementos que cumplen la funcion
//Filter es muy utilizado para eliminar un elemento pero es inmutable que no mute el original. 
//A partir del arreglo original hacemos un filtro, y creamos un nuevo arreglo sin ese elemento a eliminar.
//Usando Filter para Crear un nuevo arreglo con ids mayores a 1
    console.log('--- Filter invoiceDeleted ---- ');
    const invoiceDeleted = invoices.filter(i => i.id !=2) //filtra todos aquellas facturas menos la del id 2.
    console.log(invoiceDeleted);

    const invoiceFilter = invoices.filter(i => i.id > 1) //filtra los id, donde el id de factura es > 1 para crear un nuevo arreglo que va a mostrar
    console.log(invoiceFilter);

//Usando Filter para Crear un nuevo arreglo donde los items de las facturas se repitan con el nombre paper
const invoiceFilterItem = invoices.filter(i => i.items.includes(papper))  //filtra los items que contentan paper, para crear un nuevo arreglo a mostrar. includes valida la variable por referencia no por valor
console.log(invoiceFilterItem);

//Metodo Some: Devuelve true o false es para comprobar si existe algo en el arreglo
const result = invoices.some( i => i.client.name === 'Pepe') //valida si dentro de nombre de cliente hay alguien con nombre Pepe
console.log(result);






