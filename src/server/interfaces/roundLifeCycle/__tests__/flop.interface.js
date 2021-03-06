const instance = require('../flop.interface');

jest.mock('../../deck/deck.interface');
const deck = require('../../deck/deck.interface');

describe('flop.interface', () => {
    it('should call getFlop', () => {
        instance();

        expect(deck.getFlop).toHaveBeenCalledTimes(1);
    });
});
