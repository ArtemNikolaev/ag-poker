function error404(req, res) {
  res.status(404).send('Page Not Exist Bleat');
}

module.exports = {
  error404,
}
