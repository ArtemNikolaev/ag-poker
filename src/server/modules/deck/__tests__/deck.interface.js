const deckClass = require('../deck.class');
jest.mock('../deck.class');

const deckInstance = require('../deck.interface');

describe('deck.interface', () => {
    it('should be instance of Deck', () => {
       expect(deckInstance).toBeInstanceOf(deckClass);
    });
});
