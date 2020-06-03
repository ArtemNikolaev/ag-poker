const EventEmitter = require('events');

const logger = require('../services/logger');
const store = require('./players');

/*
* Statuses:
*
* pending
* hand-out
* trade
* flop
* trade
* turn
* trade
* river
* trade
* opening
* determine the winner
* */


class Game extends EventEmitter {
  isGameOn = false;
  players = {};
  sb = '';
  bb = '';
  bank = 0;
  status = 'pending';

  amount = 5000;

  constructor() {
    super();

    store.on('new:player', () => {
      if (this.isGameOn) {
        logger.silly('Game is already started');
        return;
      }
      if (store.players.size < 2) {
        logger.silly('Players less than needed amount');
        return;
      }

      logger.silly('begin the game');

      this.isGameOn = true;
      this._begin();
    });

    store.on('player:removed', (id) => {
      if (this.players[id]) {
        delete this.players[id];
        logger.silly(`player ${id} removed`);

        this._validate();
        this._begin();
      }
    });
  }

  setAmount(num) {
    logger.silly(`minimal amound setted to ${num}`);
    this.amount = num;
  }

  _validate() {
    this.emit('players', this.players);

    const length = Object.keys(this.players).length;

    if (length < 2) {
      this.players = {};

      this.isGameOn = false;
    }
  }

  _begin() {
    const playersIterator = store.players.entries();

    for (let el of playersIterator) {
      const player = el[0];

      if (!this.players[player]) {
        this.players[player] = this.amount;
      }
    }

    this._validate();
  }
}

module.exports = new Game();
