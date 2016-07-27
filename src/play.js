'use strict'

const scanf = require('scanf');
const AnswerGenerator = require('./models/random-number');
const compareNum = require('./models/compareNumber');

function play() {
  const isUnique = (item, index, array) => {
    return array.lastIndexOf(item) === index;
  }

  console.log("welcome!\n");
  const defaultNum = AnswerGenerator.randomNumber();
  for(let times = 6; times > 0; times--) {
    console.log(`Please input your number(${times})`);
    const guessNum = scanf('%s');
    if( !guessNum.split('').every(isUnique)) {
      console.log('Cannot input duplicate numbers!');
    }else {
      const result = compareNum.comparedResult(guessNum, defaultNum);
      if(result === '4A0B') {
        console.log('Congratulations!');
        return ;
      }else {
        console.log(result + '\n');
      }
    }

  }

  console.log('Game Over');
}

play();
