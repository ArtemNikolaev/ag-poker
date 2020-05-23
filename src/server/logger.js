const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf((info) => JSON.stringify(info, null, 2)),
  ),
  transports: [
    new transports.Console({}),
  ],
});

module.exports = logger;
