module.exports = () => {
  global.logger.silly('get:blinds');
  return global.dispatcher.emit('move:done');
};
