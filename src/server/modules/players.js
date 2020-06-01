const EventEmitter = require('events');

const logger = require('../services/logger');

class Players extends EventEmitter {
  amount = 3;
  money = 5000;

  players = new Map();
  spectators = new Set();

  setAmount(num) {
    if (isNaN(num) || num < 2 || num > 8) {
      return logger.error('Players.setAmount(num): num should be number between 2 and 8');
    }

    this.amount = num;

    this._rearrange();
  }

  setMoney(num) {
    if (isNaN(num) || num < 0) {
      return logger.error('Players.setAmount(num): num should be number bigger than 0');
    }

    this.money = num;
  }

  add(id) {
    if (this.players.has(id) || this.spectators.has(id)) {
      return logger.error('Players.add(id): player or spectator with this id already exist');
    }

    if (this.players.size < this.amount) {
      logger.silly(`${id} added as player`);

      const data = {
        money: this.money,
      };

      this.players.set(id, data);

      this.emit('new:player', { id, data });
    } else {
      logger.silly(`${id} added as a spectator`);
      this.spectators.add(id);

      this.emit('new:spectator', id);
    }

    this.emit('update:game');
  }

  remove(id) {
    if (this.players.has(id)) {
      this.players.delete(id);

      logger.silly(`${id} was removed from plaeyrs`);

      this._rearrange();
    } else if (this.spectators.has(id)) {
      this.spectators.delete(id);

      logger.silly(`${id} was removed from spectators`);
    }

    this.emit('update:game');
  }

  _rearrange() {
    if (this.players.size < this.amount && this.spectators.size > 0) {
      const id = this.spectators.entries().next().value[0];

      this.spectators.delete(id);
      this.add(id);
    }
  }
}

module.exports = new Players();
