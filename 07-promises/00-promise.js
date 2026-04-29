    // Callbacks: Son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete una tarea asincrónica.
    const fruitList = [ 'Mora', 'Mango', 'Mandarina' ];

    fruitList.forEach( function ( value ) {
        console.log( value );
    } );


    // Promises: Son objetos que representan la eventual finalización (o falla) de una operación asincrónica y su valor resultante. Las promesas tienen tres estados: pendiente, cumplida y rechazada. 
    // La promesa es una clase que se utiliza para manejar operaciones asincrónicas de manera más legible y estructurada, evitando el "callback hell" (anidamiento excesivo de callbacks).

    const person = {
        name: 'Juan Carlos',
    };

    // objecto = new Clase
    const task = new Promise( function( resolve, reject ) {
        reject( 'No pude encontrar los datos de los deudores de la DIAN' );   // Catch: ERROR o Exception
        // resolve([
        //     'Juan', 'Maria', 'Pedro'
        // ]);  // Then
    } );

    // Resolver una promesa
    // 1. Then/Catch
    // 2. Async/Await

    // console.log( person, typeof(person) );        // Imprimir la promesa
    // console.log( task, typeof(task) );                // Imprimir la promesa

    // Then/Catch
    task
        .then( function( response ) {
            console.log( 'Then/Catch', response );
        })
        // .then( function( response ) {
        //     console.log( response );
        // })
        .catch( function( error ) {
            console.error( 'Then/Catch', error );
        });

// Async/Await: Forma abreviada y moderna del Then/Catch, nos obliga a envolverlo en una funcion

async function init() {
    const response = await task;
    console.log( 'Async/Await',response );
}

init();