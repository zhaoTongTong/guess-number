'use strict'

const random = require('../src/models/random-number');

describe('random number', () => {
  it('random number', () => {
    const isUnique = (item,  index, array) => {
      return array.lastIndexOf(item) === index;
    }

    const answer = random.randomNumber();
    expect(answer.length).toBe(4);
    expect(answer.split().every(isUnique)).toBeTruthy();
  });
});