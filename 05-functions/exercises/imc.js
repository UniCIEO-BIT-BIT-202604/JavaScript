// Calcular el IMC de una lista de personas, y mostrar un mensaje indicando si están por debajo del peso, con peso normal, con sobrepeso o con obesidad.

// cantidad_hombres (snake case)
// cantidadHombres  (camel case)  ---> JavaScript

// Datos de Entrada (Materia prima)
const people = [
    { name: 'Juan', lastName: 'Jimenez', age: 48, height: 1.67, weight: 54 },
    { name: 'Ana', lastName: 'Castro', age: 25, height: 1.69, weight: 60 },
    { name: 'Carlos', lastName: 'Bautista', age: 31, height: 1.75, weight: 85 }
];

// Funcion inicializadora
function init() {
    people.forEach( function( person ) {
        // console.log( person.weight, person.height );
        

        const imc = calcularImc(person.weight,person.height);  // Invocando 
        const numeroAcotado = Number( imc.toFixed( 2 ) );

        const message = diagnosticar( numeroAcotado );
        console.log( `${ person.name } ${ person.lastName } tiene un IMC de ${ imc.toFixed( 2 ) } y su diagnóstico es: ${ message }` );
    } );
}

init();


// Tarea 1: Calcular IMC
// Formula  IMC = PESO / ALTURA * ALTURA
// calcularImc( 54, 1.67 );

function calcularImc ( weight, height ) {
    if( weight < 9 ) {
        throw new Error( 'Verifique el valor ingresado para peso' );
    }
    if( height < 1.20 ) {
        throw new Error( 'Verifique el valor ingresado para la altura' );
    }

    return weight / height ** 2;
}

// Tarea 2: Diagnosticar al paciente
// Composición corporal 	    Índice de masa corporal (IMC)
// Peso inferior al normal 	    Menos de 18.5
// Normal 	                    18.5 – 24.9
// Peso superior al normal 	    25.0 – 29.9
// Obesidad 	                Más de 30.0
function diagnosticar( imc ) {
    if( imc < 0 ) {
        throw new Error( `El imc ingresado de ${ imc } no es valido` );
        // console.error( `El imc ingresado de ${ imc } no es valido` );
    }
    else if( imc < 18.5 ) {
        return 'Peso inferior al normal';
    }
    else if ( imc < 24.9 ) {
        return 'Normal';
    }
    else if ( imc < 29.9 ) {
        return 'Peso superior al normal';
        console.log( 'Hola' );
    }
    else {
        return 'Obesidad';
    }
}

//diagnosticar( 17 );     // Peso inferior al normal
// diagnosticar( 33 );     // obesidad
// diagnosticar( -33 );     // No valido