const students = [ 'Katherine', 'Dilan', 'Jose' ];
//                     0           1        2

// Menu de navegacion
// SINTAXIS FOR:
// for( <INICIALIZACION> ; <CONDICIONAL> ; <INCREMENTO/DECREMENTO> ) {
//     sentecias...
// }
// for( let i = 0; i <= 10; i = i + 1 ) {
//     console.log( i );
// }

for( let i = students.length - 1; i >= 0; i = i - 1 ) {
    console.log( 'for ', students[ i ] );
}

// SINTAXIS FOR OF:
// for( <VALOR-RECIBIDO> of <LISTA> ) {
//     sentencias...
// }

for( let student of students ) {
    console.log( 'for of ', student );
}

// SINTAXIS FOR IN:
// for( <INDICE-RECIBIDO> in <LISTA> ) {
//     sentencias...
// }

for( let index in students ) {
    console.log( 'for in ', index );
}

// SINTAXIS WHILE (igual a FOR):
//<INICIALIZACION>
//while( <CONDICION> ) {
//    sentencias...
//    <INCREMENTO/DECREMENTO>
//}
let i = students.length - 1;
while( i >= 0 ) {
    console.log( 'while ', students[ i ] );

    i = i - 1
}



// SINTAXIS DO-WHILE:
// <INICIALIZACION>
// do {
//     sentencias...
//     <INCREMENTO/DECREMENTO>
// } while( <CONDICION> );
let j = students.length - 1;
do {
    console.log( 'do-while ', students[ j ] );

    j = j - 1;
} while ( j >= 0 );
