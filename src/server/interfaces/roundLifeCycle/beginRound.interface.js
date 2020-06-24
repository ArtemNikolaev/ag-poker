const logger = require('../../services/logger');

module.exports = () => {
  logger.silly('begin:round');
  return global.dispatcher.emit('move:done');
};
