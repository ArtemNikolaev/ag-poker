const logger = require('../../../services/logger');

let count = 0;

function addPlayer(state, payload) {
    logger.silly(`players.reducer->addPlayer: ${ payload.id }`);

    const id = payload.id;

    state.push({
        id,
        name: `Player ${ ++count }`,
    });

    return state;
}

function removePlayer(state, { id }) {
    logger.silly(`players.reducer->removePlayer: ${ id }`);

    let index = -1;
    state.some((el, i) => {
        if (el.id === id) {
            index = i;
        }
    });

    if (index !== -1) {
        state.splice(index, 1);
    }

    return state;
}

function updatePlayer(players, { id, name }) {
    logger.silly(`update player '${id}' to '${name}'`);

    players.some((el, index, array) => {
        if (el.id === id) {
            array[index].name = name;

            return true;
        }

        return false;
    });

    return players;
}

module.exports = (state = [], action) => {
    logger.silly(`players.reducer: ${ action.type }`);

    switch (action.type) {
        case 'add:player':
            return addPlayer(state, action.payload);
        case 'update:player':
            return updatePlayer(state, action.payload);
        case 'remove:player':
            return removePlayer(state, action.payload);
        default:
            return state;
    }
}
