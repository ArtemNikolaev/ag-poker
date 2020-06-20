const socketio = require('socket.io');

const dispatcher = require('./interfaces/dispatcher/dispatcher.interface');

const logger = require('./services/logger');
const store = require('./modules/players');
const game = require('./modules/gameLifeCycle');

module.exports = function createSocket(httpServer) {
  const io = socketio(httpServer);

  io.on('connection', (socket) => {
    logger.debug(`new connection: ${socket.id}`);

    dispatcher.emit('add:player', socket.id);

    socket.on('disconnect', (reason) => {
      logger.debug(`${socket.id} disconnected because of: ${reason}`);

      dispatcher.emit('remove:player', socket.id);
    });
  });

  dispatcher.on('config:update', data => {
    logger.silly(`socket->dispatcher.on->config:update:\n${JSON.stringify(data, null, 4)}`);

    io.emit('config:update', data);
  });

  store.on('new:player', (id) => {
    io.to(id).emit('status:player', id);
  });

  store.on('new:spectator', (id) => io.to(id).emit('status:spectator'));

  game.on('players', (players) => io.emit('players', players));
}
