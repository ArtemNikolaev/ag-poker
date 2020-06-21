const logger = require('../../../services/logger');

const defaulValue = {
    isGameReady: false,
};

function isGameReady(state, { isGameReady }) {
    state.isGameReady = isGameReady;

    return state;
}

module.exports = (state = defaulValue, action) => {
    logger.silly(`config.reducer: ${ action.type }`);

    switch (action.type) {
        case 'is:game:ready':
            return isGameReady(state, action.payload);
        default:
            return state;
    }
}