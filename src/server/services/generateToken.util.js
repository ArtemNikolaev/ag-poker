const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const logger = require('./logger');

const place = 'generateToken';

module.exports = function generateToken (id, cb) {
  logger.silly({
    place,
    msg: 'runned',
    payload: { id },
  })

  logger.silly({
    place,
    msg: 'generating payload',
  })
  const payload = {
    id,
    timestamp: Date.now(),
  };

  logger.silly({
    place,
    msg: 'generating private key',
  })
  const privateKey = crypto
    .createHash('md5')
    .update(String(Math.random()))
    .digest('hex');

  logger.silly({
    place,
    msg: 'sign `payload` with `privateKey` and call cb',
  })
  jwt.sign(payload, privateKey, cb);
}
