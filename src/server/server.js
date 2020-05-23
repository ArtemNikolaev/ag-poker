const express = require("express");
const data = require("./data.model");
const { config, error404, game } = require("./pages");

module.exports = function createApp() {
  const app = express();

  app.use('/_',express.static('src/client'));
  app.get('*', data.isGameExist() ? game : config);
  app.all('*', error404);

  return app;
}
