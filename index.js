const http = require('http');

const app = require('express')();
const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer);
const pug = require('pug');

app.engine('pug', pug.__express);

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/src/index.html');
});

app.all('*', (req, res) => res.status(404).send('Page Not Exist Bleat'));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});
