const EventEmitter = require('events');

const logger = require('../services/logger');
const store = require('./players');
const roundLifeCycle = require('./roundLifeCycle');

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

/*
* Events:
* next:move
* next:round
* */

class Game extends EventEmitter {
  constructor() {
    super();
    this.nextRound();

    this.on('next:move', this.nextMove);
  }

  nextMove = () => {
    const result = this.round.next();
    if (result.done) this.nextRound();
  }

  nextRound = () => {
    this.round = roundLifeCycle();
  }
}

module.exports = new Game();
