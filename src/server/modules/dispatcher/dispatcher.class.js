const EventEmitter = require('events');

const tableCardsEvents = require('./events/tableCards.events.json');

class DispatcherClass extends EventEmitter {
    constructor() {
        super();

        /*
        * todo: table:cards events:
        *   table:cards:clear
        *   table:cards:flop
        *   table:cards:turn
        *   table:cards:river
        * */
    }
}

module.exports = DispatcherClass;