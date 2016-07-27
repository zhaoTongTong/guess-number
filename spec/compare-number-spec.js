'use strict'

const main = require('./main');

describe('return text of', () => {

  xit('right answer', () => {
    const defaultAnswer = '1234';
    const inputNum = '1234';
    const expectString = '4A0B';
    const result = main.getAnswer(defaultAnswer, inputNum);

    expect(result).toEqual(expectString);
  });

  it('random number', () => {
    const result = main.getRandomNum();
    expect(result.length).toBe(4);
  });
});