

/**
 * 
 * @param {Array<string>} deck Deck creado por la funcion creardeck
 * @returns 
 */
export const pedirCarta = (deck) => {
    

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}