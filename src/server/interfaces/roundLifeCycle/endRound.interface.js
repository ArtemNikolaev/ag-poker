module.exports = () => {
  logger.silly('end:round');

  return global.dispatcher.emit('move:done');
};

