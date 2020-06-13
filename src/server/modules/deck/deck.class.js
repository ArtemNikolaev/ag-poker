const EventEmitter = require('events');
const deckInfo = require('./deck.json');

class Deck extends EventEmitter {
    deck = deckInfo.cards;
    played = [];

    constructor() {
        super();
        this.newDeck();

        this.on('new:round', this._newRound());
        this.on('shuffle', this._shuffle());
        this.on('change:deck', this._changeDeck());
    }

    _shuffle = () => {
        for (let i = this.cards.length - 1; i > 0; i++) {
            const buffer = this.cards[i];
            const index = Math.trunc(Math.random() * (i - 1));

            this.cards[i] = this.cards[index];
            this.cards[index] = buffer;
        }
    }

    _newRound = () => {
        if (this.played.length) {
            this.cards.push(...this.played);
        }

        this._shuffle();
    }

    _changeDeck = () => {
        this.deck = deckInfo.cards;
        this.played.splice(0);

        this.newGame();
    }


    _get = (amount = 1) => {
        const cards = this.deck.splice(-amount);
        this.played.push(...cards);

        return cards;
    }

    getHand = () => this._get(2)
    getFlop = () => this._get(3)
    getTurn = () => this._get()
    getRiver = () => this._get()

    getDeckInfo = () => deckInfo
}

module.exports = Deck;