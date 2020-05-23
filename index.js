const http = require('http');

const createApp = require("./src/server/server");
const createSocket = require("./src/server/socket");

const app = createApp();
const httpServer = http.createServer(app);
createSocket(httpServer);

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});
