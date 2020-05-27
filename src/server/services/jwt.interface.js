const jwt = require('jsonwebtoken');

function sign(payload, privateKey) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, privateKey, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  })
}

module.exports = {
  sign,
}
