const steps = require('../interfaces/roundLifeCycle/index');

function * roundLifeCycle() {
  yield steps.beginRound();

  yield steps.getBlinds();
  yield steps.handOut();
  yield steps.trade();
  yield steps.flop();
  yield steps.trade();
  yield steps.turn();
  yield steps.trade();
  yield steps.river();
  yield steps.trade();

  yield steps.endRound();

  return 1;
}

module.exports = roundLifeCycle;
