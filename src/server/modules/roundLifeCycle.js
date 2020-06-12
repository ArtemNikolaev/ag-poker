const beginRound = require('../interfaces/roundLifeCycle/beginRound.interface');
const getBlinds = require('../interfaces/roundLifeCycle/getBlinds.interface');
const handOut = require('../interfaces/roundLifeCycle/handOut.interface');
const trade = require('../interfaces/roundLifeCycle/trade.interface');
const flop = require('../interfaces/roundLifeCycle/flop.interface');
const turn = require('../interfaces/roundLifeCycle/turn.interface');
const river = require('../interfaces/roundLifeCycle/river.interface');
const endRound = require('../interfaces/roundLifeCycle/endRound.interface');

function * roundLifeCycle() {
  yield beginRound();

  yield getBlinds();
  yield handOut();
  yield trade();
  yield flop();
  yield trade();
  yield turn();
  yield trade();
  yield river();
  yield trade();

  return endRound();
}

module.exports = roundLifeCycle;
