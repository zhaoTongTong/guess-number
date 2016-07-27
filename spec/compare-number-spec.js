'use strict'

const answer = require('../src/models/compareNumber');

describe('return text of', () => {

  it('right answer', () => {
    const defaultAnswer = '1234';
    const inputNum = '1234';
    const expectString = '4A0B';
    const result = answer.comparedResult(defaultAnswer, inputNum);

    expect(result).toEqual(expectString);
  });
});