const { combineReducers, createStore } = require('redux');

// reducers
const players = require('./reducers/players.reducer');
const config = require('./reducers/config.reducer');
const chat = require('./reducers/chat.reducer');

// middleware
const isGameReady = require('./middleware/isGameReady.middleware');

const store = createStore(combineReducers({
    players,
    config,
    chat,
}));

store.subscribe(() => {
    const state = store.getState();

    isGameReady(state, store);
});

module.exports = store;
