import http from 'http';

import createApp from "./src/server.mjs";
import createSocket from "./src/socket.mjs";

const app = createApp();
const httpServer = http.createServer(app);
createSocket(httpServer);

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});
