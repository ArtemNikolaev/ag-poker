const logger = require('../logger');
const generateToken = require("../utils/generateToken.util");

module.exports = function init(io, socket) {
  logger.silly("init:events - initialize socket event for registration")

  socket.on('init:token:req', (token) => {
    logger.silly({
      msg: 'init:token:req - handle event',
      payload: { token },
    });

    if (!token) {
      logger.silly('init:token:req - token no exists, so generating new token');

      generateToken(socket.id, function(err, token) {
        logger.silly('generateToken:cb - runned');
        if (err) return logger.error(err);

        logger.debug({
          msg: 'generateToken:cb - token succesfully generated',
          payload: { token },
        });

        logger.silly({
          msg: 'generateToken:cb - emit `init:token:res` with generated token',
          payload: { token },
        });

        io.to(socket.id).emit('init:token:res', token);
      });
    } else {
      logger.silly('init:token:req - token exists, so just run connection logic');
    }
  });
}
