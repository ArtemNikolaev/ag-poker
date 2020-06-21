const socketio = require('socket.io');

const dispatcher = require('./interfaces/dispatcher/dispatcher.interface');

const logger = require('./services/logger');

module.exports = function createSocket(httpServer) {
  const io = socketio(httpServer);

  io.on('connection', (socket) => {
    logger.debug(`new connection: ${socket.id}`);

    dispatcher.emit('add:player', socket.id);

    socket.on('update:player', (name) => {
      logger.debug(`rename:player:${socket.id}:${name}`);

      dispatcher.emit('update:player', { id: socket.id, name });
    });

    socket.on('disconnect', (reason) => {
      logger.debug(`${socket.id} disconnected because of: ${reason}`);

      dispatcher.emit('remove:player', socket.id);
    });

    socket.on('begin:game', () => dispatcher.beginGame())
  });

  dispatcher.on('update', data => {
    logger.silly(`socket->dispatcher.on->config:update:\n${JSON.stringify(data, null, 4)}`);

    io.emit('update', data);
  });
}
