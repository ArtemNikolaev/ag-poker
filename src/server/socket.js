const socketio = require('socket.io');

const logger = require('./services/logger');
const store = require('./modules/players');

module.exports = function createSocket(httpServer) {
  const io = socketio(httpServer);

  io.on('connection', (socket) => {
    logger.debug(`new connection: ${socket.id}`);
    store.add(socket.id);

    socket.on('disconnect', (reason) => {
      logger.debug(`${socket.id} disconnected because of: ${reason}`);

      store.remove(socket.id);
    });
  });

  store.on('new:player', (result) => {
    io.to(result.id).emit('status:player', result.data);
  })

  store.on('new:spectator', (id) => io.to(id).emit('status:spectator'));
}
