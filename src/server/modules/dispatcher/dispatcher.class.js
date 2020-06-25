const EventEmitter = require('events');
const logger = require('../../services/logger');
const gameStore = require('../redux-store/gameStore');
const gameLifeCycle = require('../gameLifeCycle');

class DispatcherClass extends EventEmitter {
    gameStorePreviousVal = gameStore.getState();

    constructor() {
        super();
        this._playersEvents();

        gameStore.subscribe(this._gameStoreSubscription);

        this.on('move:done', () => setTimeout(gameLifeCycle.nextMove));
        this.on('round:done', () => logger.silly('dispatcher:round:done'));
        this.on('chat:message', ({ id, name, msg }) => {
          if (!name) {
            const curr = gameStore.getState();
            name = curr.players.filter(player => player.id === id)[0].name;
          }

          gameStore.dispatch({
            type: 'chat:message',
            payload: { name, msg },
          })
        });
    }

    _gameStoreSubscription = () => {
        logger.silly('dispatcher -> gameStoreSubscription');

        const curr = gameStore.getState();

        this.emit('update', curr);
    }

    _playersEvents() {
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

        this.on(
            'update:player',
            payload => {
                logger.silly(`rename player: ${ JSON.stringify(payload, null, 4) }`);

                gameStore.dispatch({
                    type: 'update:player',
                    payload,
                })
            },
        )
    }

    beginGame() {
        logger.silly('dispatcher -> begin:game');

        gameLifeCycle.beginGame();
    }
}

module.exports = DispatcherClass;
