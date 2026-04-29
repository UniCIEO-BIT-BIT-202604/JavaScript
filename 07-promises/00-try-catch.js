function division( numerador, denominador ) {
    
    try {
        const resultado = numerador/denominador;
        return resultado;
    } 
    catch (error) {
        console.error( 'No se puede dividir por cero' );
        return null;
    }

}

let resultado = division( 9, 3 );      // 3
console.log( resultado );
resultado = division( 9, 0 );      // Infinito
console.log( resultado );
resultado = division( 0, 3 );      // 0
console.log( resultado ); 