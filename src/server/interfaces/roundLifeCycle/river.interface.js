/*const deck = require('../deck/deck.interface');

module.exports = async () => {
    return Promise.resolve(deck.getRiver());
};*/
module.exports = () => {
    global.logger.silly('river');
    return global.dispatcher.emit('move:done');
};
