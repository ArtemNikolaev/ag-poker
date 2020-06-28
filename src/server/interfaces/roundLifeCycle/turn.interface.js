const deck = require('../deck/deck.interface');

module.exports = () => {
    global.logger.silly('turn');

    dispatcher.emit('round:set:turn', deck.getTurn());

    return global.dispatcher.emit('move:done');
};

