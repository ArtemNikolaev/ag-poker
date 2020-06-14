const flopInterface = require('../flop.interface');

jest.mock('../../deck/deck.interface');
const deck = require('../../deck/deck.interface');

describe('flop.interface', () => {
    it('should call getFlop', () => {
        flopInterface();

        expect(deck.getFlop).toHaveBeenCalledTimes(1);
    });
});
