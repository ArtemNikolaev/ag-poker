const deck = require('../deck/deck.interface');

module.exports = () => {
    global.logger.silly('flop');

    dispatcher.emit('round:set:flop', deck.getFlop());

    return global.dispatcher.emit('move:done');
};
