const EventEmitter = require('events');
const deck = require('../../interfaces/deck/deck.interface');

class Store extends EventEmitter {
  store = {
    flop: false,
  };

  constructor() {
    super();

    this._handleDeckEvents();
  }

  _handleDeckEvents() {
    deck.on('flop', (flop) => {
      this.store.flop = flop;

      this.emit('cards:flop', this.store.flop);
    });

    deck.on('turn', (flop) => {
      this.store.turn = turn;

      this.emit('cards:turn', this.store.turn);
    });

    deck.on('river', (flop) => {
      this.store.river = river;

      this.emit('cards:turn', this.store.turn);
    });
  }

  getStore = () => this.store
}

module.exports = Store;
