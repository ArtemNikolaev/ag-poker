// const deck = require('../deck/deck.interface');

// module.exports = async () => {
//     return Promise.resolve(deck.getFlop());
// };
module.exports = () => {
    global.logger.silly('flop');
    return global.dispatcher.emit('move:done');
};
