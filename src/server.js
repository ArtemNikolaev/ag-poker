import express from "express";
import pug from "pug";
import data from "./data.model.js";
import { config, error404, game } from "./pages.js";

export default function createApp() {
  const app = express();

  app.engine('pug', pug.__express);
  app.get('*', data.isGameExist() ? game : config);
  app.all('*', error404);

  return app;
}
