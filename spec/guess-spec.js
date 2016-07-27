'use strict'

const Guess = require('../src/models/guess');
const answerGenerator = require('../src/models/random-number');

describe('guess', () => {
  it('should guess', () => {
    spyOn(answerGenerator, 'randomNumber').and.returnValue('1234');
    const result = Guess.guess('1234');
    expect(result).toEqual('4A0B');
  });
});