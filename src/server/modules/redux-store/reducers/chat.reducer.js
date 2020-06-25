const logger = require('../../../services/logger');

module.exports = (state = [], action) => {
    logger.silly(`chat.reducer: ${ action.type }`);

    switch (action.type) {
        case 'chat:message':
            return state.concat([ action.payload ]);
        default:
            return state;
    }
}
