module.exports = () => {
  global.logger.silly('hand:out');
  return global.dispatcher.emit('move:done');
};
