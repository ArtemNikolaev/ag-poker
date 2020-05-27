const crypto = require('crypto');

const logger = require('./logger');
const jwt = require('./jwt.interface');

async function generateToken(id) {
  logger.silly(`generateToken for ${id}`);

  const payload = {
    id,
    timestamp: Date.now(),
  };

  const privateKey = crypto
    .createHash('md5')
    .update(String(Math.random()))
    .digest('hex');

  return jwt.sign(payload, privateKey);
}

module.exports = generateToken;
