const http = require('http');
const createApp = require("./server");
const createSocket = require("./socket");
const logger = require('./services/logger');
const ifaces = require('os').networkInterfaces();

// todo: move to config
const port = 3000;
const host = '0.0.0.0';

module.exports = () => {
  createApp()
    .then(app => Promise.resolve(http.createServer(app)))
    .then(httpServer => {
      createSocket(httpServer);

      httpServer.listen(
        port,
        host,
        () => {
          logger.info('Server runned on:');
          if (host !== '0.0.0.0') {
            logger.info(`http://${host}:${port}/`);
          }
          else {
            Object.keys(ifaces).forEach(function (dev) {
              ifaces[dev].forEach(function (details) {
                if (details.family === 'IPv4') {
                  logger.info(`http://${details.address}:${port}/`);
                }
              });
            });
          }
        },
      );
    });
}
