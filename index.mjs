import http from 'http';

import createApp from "./src/server/server.mjs";
import createSocket from "./src/server/socket.mjs";

const app = createApp();
const httpServer = http.createServer(app);
createSocket(httpServer);

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});
