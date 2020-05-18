import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function load(res) {
  res
    .status(200)
    .sendFile(__dirname + '/index.html');
}

export function config(req, res) {
  console.log('config page');

  load(res);
}

export function game(req, res) {
  console.log('game page');

  load(res);
}

export function error404(req, res) {
  res.status(404).send('Page Not Exist Bleat');
}
