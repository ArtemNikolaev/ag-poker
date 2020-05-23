const http = require('http');

const createApp = require("./src/server/server");
const createSocket = require("./src/server/socket");

createApp()
  .then(app => Promise.resolve(http.createServer(app)))
  .then(httpServer => {
    createSocket(httpServer);

    httpServer.listen(3000, () => console.log('listening on *: 3000'));
  });
