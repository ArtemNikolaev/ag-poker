const EventEmitter = require('events');
const logger = require('../../services/logger');
const gameStore = require('../redux-store/gameStore');

class DispatcherClass extends EventEmitter {
    gameStorePreviousVal = gameStore.getState();

    constructor() {
        super();

        this.on(
            'add:player',
            id => {
                logger.silly(`adding new player: ${ id }`);

                gameStore.dispatch({
                    type: 'add:player',
                    payload: { id },
                });
            },
        );

        this.on(
            'remove:player',
            id => {
                logger.silly(`remove player: ${ id }`);

                gameStore.dispatch({
                    type: 'remove:player',
                    payload: { id },
                });
            }
        );

        gameStore.subscribe(this.gameStoreSubscription);
    }

    gameStoreSubscription = () => {
        logger.silly('dispatcher -> gameStoreSubscription');

        const curr = gameStore.getState();

        this.emit('config:update', curr);
    }
}

module.exports = DispatcherClass;