const logger = require('../../../services/logger');

const defaulValue = {
    isGameReady: false,
};

function isGameReady(state, { isGameReady }) {
    state.isGameReady = isGameReady;

    return state;
}

function setFlop(state, { flop }) {
    state.flop = flop;

    return state;
}

function setTurn(state, { turn }) {
    state.turn = turn;

    return state;
}

function setRiver(state, { river }) {
    state.river = river;

    return state;
}

module.exports = (state = defaulValue, action) => {
    logger.silly(`round.reducer: ${ action.type }`);

    switch (action.type) {
        case 'round:set:players':
            return isGameReady(state, action.payload);
        case 'round:set:flop':
            return setFlop(state, action.payload);
        case 'round:set:turn':
            return setTurn(state, action.payload);
        case 'round:set:river':
            return setRiver(state, action.payload);
        default:
            return state;
    }
}
