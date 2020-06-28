const EventEmitter = require('events');
const deckInfo = require('./deck.json');

class Deck extends EventEmitter {
    deck = deckInfo.cards;
    played = [];

    constructor() {
        super();
        this._newRound();

        this.on('new:round', this._newRound);
        this.on('shuffle', this._shuffle);
        this.on('change:deck', this._changeDeck);
    }

    _shuffle = () => {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const buffer = this.deck[i];
            const index = Math.trunc(Math.random() * (i - 1));

            this.deck[i] = this.deck[index];
            this.deck[index] = buffer;
        }

        // shuffle for 0 el
        {
            const rand = Math.random() * (this.deck.length - 1 -1);
            const index = Math.trunc(rand) + 1;
            const buffer = this.deck[index];

            this.deck[index] = this.deck[0];
            this.deck[0] = buffer;
        }

        this.emit('shuffle');
    }

    _newRound = () => {
        if (this.played.length) {
            this.deck.push(...this.played);
        }

        this.emit('new:round');
        this._shuffle();
    }

    _changeDeck = () => {
        this.deck = deckInfo.cards;
        this.played.splice(0);

        this.emit('change:deck');
        this._newRound();
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
