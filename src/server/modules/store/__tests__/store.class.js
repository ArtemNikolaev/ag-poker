const Store = require('../store.class');

jest.mock('../../../interfaces/deck/deck.interface');
const deck = require('../../../interfaces/deck/deck.interface');

describe('store.class', () => {
  let store;

  beforeEach(() => {
    store = new Store();
    deck.on = jest.fn();
  });

  it('_handleDeckEvents', () => {
    store._handleDeckEvents();

    expect(deck.on).toHaveBeenCalledTimes(3);
  });
});
