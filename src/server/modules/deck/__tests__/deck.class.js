const Deck = require('../deck.class');

describe('Deck class', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();

  });

  describe('_get()', () => {
    const splice = 'splice';

    beforeEach(() => {
      deck.deck = [1, 2];
    });

    describe('by default', () => {
      it('should call splice with -1', () => {
        deck.deck = {
          splice: jest.fn(() => splice),
        };
        deck._get();

        expect(deck.deck.splice).toHaveBeenCalledWith(-1);
      });

      it('played should be correct', () => {
        deck._get();

        expect(deck.played).toEqual([2]);
      });

      it('played should be correct', () => {
        expect(deck._get()).toEqual([2]);
      });
    });

    describe('with n', () => {
      const n = 2;

      it('with n argument', () => {
        deck.deck = {
          splice: jest.fn(() => splice),
        };
        deck._get(n);

        expect(deck.deck.splice).toHaveBeenCalledWith(-n);
      });

      it('not by default', () => {
        deck._get(n);

        expect(deck.played).toEqual([1, 2]);
      });

      it('played should be correct', () => {
        expect(deck._get(n)).toEqual([1, 2]);
      });
    });
  });

  it('getDeckInfo() should return deck', () => {
    const deckInfo = require('../deck.json');

    expect(deck.getDeckInfo()).toEqual(deckInfo);
  });
});

