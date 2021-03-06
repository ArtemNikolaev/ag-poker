const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf((info) =>
      info.timestamp + ' - ' +
      info.level + ' ' +
      ((typeof info.message === 'string') ?
        info.message :
        '\n' + JSON.stringify(info.message, null, 2))),
  ),
  transports: [
    new transports.Console({}),
  ],
});

module.exports = logger;
