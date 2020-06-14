const deckClass = require('../../../modules/deck/deck.class');
jest.mock('../../../modules/deck/deck.class');

const deckInstance = require('../deck.interface');

describe('deck.interface', () => {
    it('should be instance of Deck', () => {
       expect(deckInstance).toBeInstanceOf(deckClass);
    });
});
