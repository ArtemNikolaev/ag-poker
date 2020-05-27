const socketio = require('socket.io');

const logger = require('./services/logger');
const generateToken = require('./services/generateToken.util');

module.exports = function createSocket(httpServer) {
  const io = socketio(httpServer);

  io.on('connection', (socket) => {
    logger.debug(`new connection: ${socket.id}`);

    socket.on('init:token:request', async (token) => {
      if (!token) {
        token = await generateToken(socket.id);

        logger.debug(`send to ${socket.id} generated token: ${token}`);
        io.to(socket.id).emit('init:token:response', token);
      }

    //  register to appf
    //     io.to(socket.id).emit('init:player:data', playerData);
    //  send players data
    })

    socket.on('disconnect', (reason) => {
      logger.debug(`${socket.id} disconnected because of: ${reason}`);
    });
  });
}
