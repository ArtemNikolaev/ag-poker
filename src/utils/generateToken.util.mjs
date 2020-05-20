import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export default function generateToken (id, cb) {
  const payload = {
    id,
    timestamp: Date.now(),
  };
  const privateKey = crypto
    .createHash('md5')
    .update(String(Math.random()))
    .digest('hex');

  jwt.sign(payload, privateKey, cb);
}
