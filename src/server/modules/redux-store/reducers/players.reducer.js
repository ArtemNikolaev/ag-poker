const logger = require('../../../services/logger');

function addPlayer(state, payload) {
    logger.silly(`players.reducer->addPlayer: ${ payload.id }`);
    const id = payload.id;

    state.push({
        id,
        name: `Player ${state.length + 1}`,
    });

    return state;
}

function removePlayer(state, payload) {
    logger.silly(`players.reducer->removePlayer: ${ payload.id }`);
    const id = payload.id;

    let index;
    state.some((el, i) => {
        if (el.id === id) {
            index = i;
        }
    });

    if (index !== undefined) {
        state.splice(index, 1);
    }

    return state;
}

module.exports = (state = [], action) => {
    console.log({ state, action });

    switch (action.type) {
        case 'add:player':
            return addPlayer(state, action.payload);
        case 'remove:player':
            return removePlayer(state, action.payload);
        default:
            return state;
    }
}
