
import PropTypes from 'prop-types';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';
import { Book } from './components/Book';

//export function HelloWorld(props){ //por medio de props recibe los valores de la variable desde la clase padre(main.jsx)

//por medio de props recibe los valores de la variable desde la clase padre(main.jsx), se define la variables a recibir 
//desde la clase padre esto para que al momento de utilizar no hay que escribir props.user, props.id
// export function HelloWorld({ user, id} ){  //por props recibe el user y id desde la clase padre(main.jsx)

//Declarando la funcion usando Arrow function o Funcion Flecha
//por props recibe el user y id desde la clase padre(main.jsx), no es necesario que todos lo parametros vengan del padre como title se pueden definir en esta clase
/* export const HelloWorld = ({ user, id, title='Hola mundo'} ) => {   */
export const HelloWorldApp = ({ user, id, title, book} ) => { //title viene de la clase padre


    console.log(title);

    //const name = 'Pepe'; //Variables internas para esta clase

    //return  <div>Hola mundo</div> //una linea de codigo no es necesario usar llaves
    //un return solo puede retornar un elemento, por lo que si hay mas elementos deben ir encerrado en un <div> ... </div> padre o un Fragmento <>... </>
    return ( 
        //<div> //forma 1: de encerrar mas de 1 elemento en el return, usando div
        //<> forma 2: de encerrar mas de 1 elemento en el return, usando fragmento mas recomendado
        //Forma 3: de encerrar mas de 1 elemento en el return, usar etiqueta <Fragment> </Fragment>
        <> 
             
             {/* con props. obtenemos los datos enviados desde la clase padre main.jsx */}
             {/* <div>Que tal! {props.user} con el id: {props.id} </div> */}

            {/* Ejemplo: Recibir tipo de dato Objeto user de la clase padre y convertirlo en un Strig para mostrarlo completo*/}
            {/*  <div>Que tal! {JSON.stringify(user)} con el id={id + 5} </div>  */}
           

            {/*  <div>Que tal! {user} con el id={id + 5} </div> */} 


        {/* Ejemplo trae los datos del componente padre main.jsx - OK*/}
            {/* <h1>{title}</h1> */}
            {/* Ejemplo: Recibir tipo de dato Objeto user de la clase padre */}
             {/*  
             <div>Que tal! {user.name} {user.lastname}  con el id={id + 5} </div>
             <div>{ book }</div> 
            */}

          {/* Se Ejecuta otros componentes en HelloWorldApp y se convierte en padre por lo que envia los datos a las clases hijas - Ok*/}
          <Title title={'!Hola mundo!'}/>
          <UserDetails user={{name:'Pepe', lastname:'Doe'}} id={1}/>
          <Book book={'mineria'}/>

         
         {/* Este ejemplo recibimos lo valores de las variable (title, user y el id) desde la clase padre main.jsx y se lo pasamos al hijo UserDetails.jsx */}
         <Title title={title}/>
         <UserDetails user={user} id={id}/>
        <Book book={book}/>
        </>
        //</div>
       
        ) 
}


//Configurando PropTypes para validaciones de las propiedades para que el tipo de dato que se espera sea el correcto
//para esto se debe instalar la dependencia: npm install prop-types
//Validacion para verificar si las variables de parametros definidad en la funcion, datos viene de la clase padre(main.jsx), o asignar valores por defecto y definirlas como requerido

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired, //la variable titulo es de tipo String y es requerida
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    book: PropTypes.string.isRequired,
}

//Establecer valores por defecto a las props o parametros en la funcion, datos viene de la clase padre(main.jsx)
//Los valores por defecto solo se aplican si no vienen los valores desde la clase padre, siempre tiene  prioridad la clase padre.
//Primero se agrega los valores por defecto en caso que no vengan los valores y despues se valida el tipo de dato sea el correcto
HelloWorldApp.defaultProps = {
    title: 'Hola mundo por defecto!',
    book: 'UML got a gota'
}


