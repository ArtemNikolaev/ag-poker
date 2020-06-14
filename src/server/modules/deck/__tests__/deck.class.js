const Deck = require('../deck.class');
const deckInfo = require('../deck.json');

jest.mock('events');
const EventEmitter = require('events');

describe('Deck class', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
  });

  describe('constructor', () => {
    it('should call this.on', () => {
      expect(deck.on).toHaveBeenCalledTimes(3);
    });
  });

  describe('_shuffle', () => {
    beforeEach(() => {
      Math.random = jest.fn(Math.random);
      Math.trunc = jest.fn(Math.trunc);

      deck.deck = [ 0, 1, 2, 3 ];
    });

    it('should call Math.random', () => {
      deck._shuffle();

      expect(Math.random).toHaveBeenCalledTimes(deck.deck.length);
    });


    it('should call Math.trunc', () => {
      deck._shuffle();

      expect(Math.trunc).toHaveBeenCalledTimes(deck.deck.length);
    });

    it('should change deck sorting', () => {
      const test = deck.deck.slice();
      deck._shuffle();

      expect(deck.deck).not.toEqual(test);
    });
  });

  describe('_newRound', () => {
    describe('when this.played.length', () => {
      it('=0 ', () => {
        const test = ['bla'];

        deck.deck = test;
        deck.played.splice(0);

        deck._newRound();

        expect(deck.deck).toEqual(test);
      });

      it('!=0', () => {
        const test = ['bla', 'bla1'];
        deck.deck = test.slice(0, 1);
        deck.played = test.slice(1);

        deck._newRound();

        expect(deck.deck).toEqual(test);

      });
    });

    it('this._shuffle should be called', () => {
      deck._shuffle = jest.fn();

      deck._newRound();
      expect(deck._shuffle).toHaveBeenCalledTimes(1);
    });
  });

  describe('_changeDeck', () => {
    beforeEach(() => {
      deck._newRound = jest.fn();
    });

    it('deck should be fresh', () => {
      deck._changeDeck();

      expect(deck.deck).toEqual(deckInfo.cards);
    });

    it('played should be empty', () => {
      deck._changeDeck();

      expect(deck.played.length).toBe(0);
    });

    it('should call _newRound()', () => {
      deck._changeDeck();

      expect(deck._newRound).toHaveBeenCalledTimes(1);
    });
  });

  /*
  * todo: rewrite, 2 tests for splice and 1 for all others
  *  */
  describe('_get()', () => {
    // called with nothing
    // called with param
    // push to played
    // return what pushed

    const testData = [1];
    let splice;

    beforeEach(() => {
      splice = jest.fn(() => testData);
      deck.deck = testData.slice();
      deck.deck.splice = splice;
    });

    it('should call splice with -1 if no param', () => {
      deck._get();

      expect(splice).toHaveBeenCalledWith(-1);
    });

    it('should call splice with -n with n param', () => {
      const n = 5
      deck._get(n);

      expect(splice).toHaveBeenCalledWith(-n);
    });

    it('should push spliced data to played', () => {
      deck._get();

      expect(deck.played).toEqual(testData);
    });

    it('should return spliced cards', () => {
      expect(deck._get()).toEqual(testData);
    })
  });

  describe('get funcs', () => {
    beforeEach(() => {
      deck._get = jest.fn();
    });

    describe('should call this._get()', () => {
      it('getHand()', () => {
        deck.getHand();

        expect(deck._get).toHaveBeenCalledWith(2);
      });

      it('getFlop()', () => {
        deck.getFlop();

        expect(deck._get).toHaveBeenCalledWith(3);
      });

      it('getTurn()', () => {
        deck.getTurn();

        expect(deck._get).toHaveBeenCalledWith();
      });

      it('getRiver()', () => {
        deck.getRiver();

        expect(deck._get).toHaveBeenCalledWith();
      });

    });
  });

  it('getDeckInfo() should return deck', () => {
    expect(deck.getDeckInfo()).toEqual(deckInfo);
  });
});

