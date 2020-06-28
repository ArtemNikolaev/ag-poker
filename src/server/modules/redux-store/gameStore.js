const { combineReducers, createStore } = require('redux');

// reducers
const players = require('./reducers/players.reducer');
const config = require('./reducers/config.reducer');
const chat = require('./reducers/chat.reducer');
const round = require('./reducers/round.reducer');

// middleware
const isGameReady = require('./middleware/isGameReady.middleware');

const store = createStore(combineReducers({
    players,
    config,
    chat,
    round,
}));

store.subscribe(() => {
    const state = store.getState();

    isGameReady(state, store);
});

module.exports = store;
