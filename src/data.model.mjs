class Data {
  game = false;

  constructor() {
    console.log('Data initialized');
  }

  isGameExist() {
    return this.game;
  }
}

export default new Data();
