class Data {
  game = false;

  constructor() {
    console.log('Data initialized');
  }

  isGameExist() {
    return this.game;
  }
}

module.exports = new Data();
