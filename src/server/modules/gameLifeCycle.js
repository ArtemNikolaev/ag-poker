const logger = require('../services/logger');
const store = require('./redux-store/gameStore');

class GameLifeCycle {
  beginGame = () => {
    logger.silly('GameLifeCycle -> beginGame');
    const isGameReady = store.getState().config.isGameReady;

    if (!isGameReady) { logger.error('GameLifeCycle -> beginGame: !isGameReady'); }
  }
}

module.exports = new GameLifeCycle();
