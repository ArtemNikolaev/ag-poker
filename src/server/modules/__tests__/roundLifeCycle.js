const roundLifeCycle = require('../roundLifeCycle');

jest.mock('../../interfaces/roundLifeCycle');
const steps = require('../../interfaces/roundLifeCycle/index');

describe('roundLifeCycle', () => {
  const instance = roundLifeCycle();

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('should call beginRound()', () => {
    instance.next();

    expect(steps.beginRound).toHaveBeenCalledTimes(1);
  })

  it('should call getBlinds()', () => {
    instance.next();

    expect(steps.getBlinds).toHaveBeenCalledTimes(1);
  });

  it('should call handOut()', () => {
    instance.next();

    expect(steps.handOut).toHaveBeenCalledTimes(1);
  });

  it('should call trade()', () => {
    instance.next();

    expect(steps.trade).toHaveBeenCalledTimes(1);
  });

  it('should call flop()', () => {
    instance.next();

    expect(steps.flop).toHaveBeenCalledTimes(1);
  });

  it('should call trade()', () => {
    instance.next();

    expect(steps.trade).toHaveBeenCalledTimes(1);
  });

  it('should call turn()', () => {
    instance.next();

    expect(steps.turn).toHaveBeenCalledTimes(1);
  });

  it('should call trade()', () => {
    instance.next();

    expect(steps.trade).toHaveBeenCalledTimes(1);
  });

  it('should call river()', () => {
    instance.next();

    expect(steps.river).toHaveBeenCalledTimes(1);
  });

  it('should call trade()', () => {
    instance.next();

    expect(steps.trade).toHaveBeenCalledTimes(1);
  });

  it('should call endRound()', () => {
    instance.next();

    expect(steps.endRound).toHaveBeenCalledTimes(1);
  });
});