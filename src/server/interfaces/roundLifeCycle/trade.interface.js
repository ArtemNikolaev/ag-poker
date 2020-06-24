module.exports = () => {
  global.logger.silly('trade');
  return global.dispatcher.emit('move:done');
};

