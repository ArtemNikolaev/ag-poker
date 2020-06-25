const express = require("express");
const { error404 } = require("./pages");

module.exports = async function createApp() {
  const app = express();

  app.use('/',express.static('./public'));
  app.all('*', error404);

  return app;
}
