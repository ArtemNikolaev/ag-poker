const deck = require('../deck/deck.interface');

module.exports = async () => {
    return Promise.resolve(deck.getRiver());
};
