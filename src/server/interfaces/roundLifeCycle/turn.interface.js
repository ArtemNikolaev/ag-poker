/*const deck = require('../deck/deck.interface');

module.exports = async () => {
    return Promise.resolve(deck.getTurn());
};*/

module.exports = () => {
    global.logger.silly('turn');
    return global.dispatcher.emit('move:done');
};

