const { combineReducers, createStore } = require('redux');

// reducers
const players = require('./reducers/players.reducer');

const rootReducer = combineReducers({
    players,
})

const store = createStore(
    rootReducer,
)

module.exports = store;