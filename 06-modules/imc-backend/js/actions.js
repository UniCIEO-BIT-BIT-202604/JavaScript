// Actions: Funciones que resuelven la logica de 

// Tarea 1: Calcular IMC
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


module.exports = { calcularImc, diagnosticar };