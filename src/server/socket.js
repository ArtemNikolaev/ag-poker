const socketio = require('socket.io');
const init = require('./events/init.events');

module.exports = function createSocket(httpServer) {
  const io = socketio(httpServer);

  io.on('connection', (socket) => {
    console.log('a user connected: ', socket.id);
    init(io, socket);

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });

    socket.on('test', console.log);
  });
}
