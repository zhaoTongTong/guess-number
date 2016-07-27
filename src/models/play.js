'use strict'

const AnswerGenerator = require('./random-number');
const deFaultNum = require('./compareNumber');

class Game {
  constructor() {
    this.answer = AnswerGenerator.randomNumber();
    this.chances = 6;

    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {

      if(!this.validate(input) || input.length-1 !== 4) {
        console.log('Cannot input duplicate numbers!');
        this.ask();

      }else {
        const result = deFaultNum.comparedResult(this.answer, input);
        if(result === '4A0B') {
          console.log('Congratulations!');
          process.exit();
        }else {
          console.log(result);
          this.chances--;
          if(this.isGameOver()) {
            console.log('Game Over');
            console.log(`answer:${this.answer}`);
            process.exit();
          }else {
            this.ask();
          }
        }
      }

    });
  }

    start() {
      console.log('Welcome!\n');
      this.ask();
    }

    ask() {
      console.log(`Please input your number(${this.chances}): `);
    }

    validate(input) {
      return input.split('').every((item, index, array) => array.lastIndexOf(item) === index);
    }

    isGameOver() {
      return this.chances === 0;
    }
}

new Game().start();

module.exports = Game;