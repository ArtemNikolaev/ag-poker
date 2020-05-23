const logger = require('../logger');
const generateToken = require("../utils/generateToken.util");

module.exports = function init(io, socket) {
  const place = 'init';
  logger.silly({
    place,
    msg: "initialize socket event for registration"
  })

  socket.on('init:token:req', (token) => {
    const place = 'init:token:req';
    logger.silly({
      place,
      msg: 'handle event',
      payload: { token },
    });

    if (!token) {
      logger.silly({
        place,
        msg: 'token no exists, so generating new token'
      });

      generateToken(socket.id, function(err, token) {
        const place = 'generateToken:cb';

        logger.silly({
          place,
          msg: 'runned',
        });
        if (err) return logger.error(err);

        logger.debug({
          place,
          msg: 'token succesfully generated',
          payload: { token },
        });

        logger.silly({
          place,
          msg: 'emit `init:token:res` with generated token',
          payload: { token },
        });

        io.to(socket.id).emit('init:token:res', token);
      });
    } else {
      logger.silly({
        place,
        msg: 'token exists, so just run connection logic'
      });
    }
  });
}
