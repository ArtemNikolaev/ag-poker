const socketio = require('socket.io');

const logger = require('./services/logger');

module.exports = function createSocket(httpServer) {
  const io = socketio(httpServer);

  io.on('connection', (socket) => {
    logger.debug(`new connection: ${socket.id}`);

    global.dispatcher.emit('add:player', socket.id);

    socket.on('update:player', (name) => {
      logger.debug(`rename:player:${socket.id}:${name}`);

      global.dispatcher.emit('update:player', { id: socket.id, name });
    });

    socket.on('chat:message', (msg) => {
      dispatcher.emit('chat:message', {id: socket.id, msg});
    });

    socket.on('disconnect', (reason) => {
      logger.debug(`${socket.id} disconnected because of: ${reason}`);

      global.dispatcher.emit('remove:player', socket.id);
    });

    socket.on('begin:game', () => global.dispatcher.beginGame())
  });

  global.dispatcher.on('update', data => {
    logger.silly(`socket->global.dispatcher.on->config:update:\n${JSON.stringify(data, null, 4)}`);

    io.emit('update', data);
  });
}
