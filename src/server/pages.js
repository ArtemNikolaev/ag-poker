function load(res) {
  res
    .status(200)
    .sendFile(__dirname + '/index.html');
}

function config(req, res) {
  res
    .status(200)
    .sendFile(__dirname + '/views/index.html');
}

function game(req, res) {
  console.log('game page');

  load(res);
}

function error404(req, res) {
  res.status(404).send('Page Not Exist Bleat');
}

module.exports = {
  config,
  game,
  error404,
}
