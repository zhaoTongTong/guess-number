'use strict'

const randomNum = require('./random-number');
const compareNum = require('./compareNumber');

class Guess {
  static guess(guessNum) {
    const result = randomNum.randomNumber();
    return compareNum.comparedResult(result, guessNum);
  }

}

module.exports= Guess;