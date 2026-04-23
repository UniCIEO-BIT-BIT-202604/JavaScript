import people from './data.js'
import { calcularImc, diagnosticar } from './actions.js';

// Calcular el IMC de una lista de personas, y mostrar un mensaje indicando si están por debajo del peso, con peso normal, con sobrepeso o con obesidad.
function init() {
    people.forEach( function( person ) {
        // console.log( person.weight, person.height );
        

        const imc = calcularImc(person.weight,person.height);  // Invocando 
        const numeroAcotado = Number( imc.toFixed( 2 ) );

        const message = diagnosticar( numeroAcotado );
        console.log( `${ person.name } ${ person.lastName } tiene un IMC de ${ imc.toFixed( 2 ) } y su diagnóstico es: ${ message }` );
    } );
}

export default init;