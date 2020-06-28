const deck = require('../deck/deck.interface');

module.exports = () => {
    global.logger.silly('river');

    dispatcher.emit('round:set:river', deck.getRiver());

    return global.dispatcher.emit('move:done');
};