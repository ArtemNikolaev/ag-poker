const generateToken = require("../utils/generateToken.util");

module.exports = function init(io, socket) {
  socket.on('init:token:req', (token) => {
    if (!token) {
      generateToken(socket.id, function(err, token) {
        if (err) return console.error(err);

        console.log('token generated: ', token);

        io.to(socket.id).emit('init:token:res', token);
      });
    } else {
      console.log('token already exists: ', token);
    }
  });
}
