const EventEmitter = require('events');

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

class GameLifeCycle extends EventEmitter {
  constructor() {
    super();
    this.nextRound();

    this.on('next:move', this.nextMove);
  }

  newConnection(id) {

  }

  nextMove = () => {
    const result = this.round.next();
    if (result.done) this.nextRound();
  }

  nextRound = () => {
    this.round = roundLifeCycle();
  }
}

module.exports = new GameLifeCycle();
