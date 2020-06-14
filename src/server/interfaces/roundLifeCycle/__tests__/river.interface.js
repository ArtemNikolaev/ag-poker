const instance = require('../river.interface');

jest.mock('../../deck/deck.interface');
const deck = require('../../deck/deck.interface');

describe('flop.interface', () => {
    it('should call getFlop', () => {
        instance();

        expect(deck.getRiver).toHaveBeenCalledTimes(1);
    });
});
