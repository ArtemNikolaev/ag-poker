const instance = require('../turn.interface');

jest.mock('../../deck/deck.interface');
const deck = require('../../deck/deck.interface');

describe('turn.interface', () => {
    it('should call getTurn', () => {
        instance();

        expect(deck.getTurn).toHaveBeenCalledTimes(1);
    });
});
