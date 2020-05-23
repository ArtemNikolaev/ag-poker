const http = require('http');

module.exports = () => {
  const createApp = require("./server");
  const createSocket = require("./socket");

  createApp()
    .then(app => Promise.resolve(http.createServer(app)))
    .then(httpServer => {
      createSocket(httpServer);

      httpServer.listen(3000, () => console.log('listening on *: 3000'));
    });
}
