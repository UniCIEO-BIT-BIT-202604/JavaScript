function calcularPromedio( total, cantidadNotas ) {
    // Clases: Empiezan con la primera en Mayuscula
    return ( total / cantidadNotas ).toFixed( 1 );  // Redondear mantiene la cantidad de decimales que se le indique
    return Math.round( total / cantidadNotas );     // Redondear dinamicamente, al entero mas proximo
    return Math.ceil(total / cantidadNotas);        // Redondear hacia arriba, al entero mas proximo
    return Math.floor(total / cantidadNotas);       // Redondear hacia abajo, al entero mas proximo
}

function sumarNotas ( listaNotas ) {
    let sumaNotas = 0;
    
    for( let i = 0; i < listaNotas.length; i++ ) {
        // console.log( nota );
        sumaNotas = sumaNotas + listaNotas[i];
    }

    return sumaNotas;  // Una funcion solo puede retornar un valor
}

// Implementacion:
let estudiante1 = {
    nombre: 'Gabriel',
    notas: [ 3.4, 1.2, 3.7, 4.1 ]
};

// Inserta nueva nota
estudiante1.notas.push( 3.3 );

const totalNotas = sumarNotas( estudiante1.notas );
const promedio = calcularPromedio( totalNotas, estudiante1.notas.length );

console.log( 'La nota final de ', estudiante1.nombre, ' es ', promedio  );