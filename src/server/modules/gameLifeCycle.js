const roundLifeCycle = require('../modules/roundLifeCycle');

class GameLifeCycle {
  game;

  beginGame() {
    logger.silly('gameLifeCycle -> begin:game');

    this.game = roundLifeCycle();
    this.nextMove();
  }

  nextMove = () => {
    logger.silly('GameLifyCycle -> nextMove()');
    // if (this.roundDone) {
    //   return this.beginGame();
    // }

    const done = this.game.next().done;

    if (done) dispatcher.emit('round:done');
  }
}

module.exports = new GameLifeCycle();
