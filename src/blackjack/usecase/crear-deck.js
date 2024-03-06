
import _ from 'underscore'


/**
 * Esta Funcion crea un nuevo deck
 * @param {Array<string>} tipoCarta ejemplo: ['C','D','H','S']
 * @param {Array<string>} cartaEspecial ejemplo : ['A','J','Q','K'];
 * @returns {Array} retorna un nuevo deck de cartas
 */

export const crearDeck = (tipoCarta, cartaEspecial) => {

    if(!tipoCarta ||tipoCarta.length === 0 )throw new Error ('tiposCarta tiene que ser un arreglo de Strings')
    if(!cartaEspecial ||cartaEspecial.length === 0 )throw new Error ('cartaEspecial tiene que ser un arreglo de Strings')
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoCarta ) {
        for( let esp of cartaEspecial ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}


