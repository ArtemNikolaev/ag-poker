import socketio from 'socket.io';

export default function createSocket(httpServer) {
  const io = socketio(httpServer);

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
}
