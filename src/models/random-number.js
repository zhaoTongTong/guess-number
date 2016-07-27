class AnswerGenerator {
  static randomNumber() {
    const digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const numbers = [];
    for(let i = 0; i < 4; i++) {
      const randomNum = Math.random()*digit.length;
      numbers.push(digit.splice(randomNum, 1)[0]);
    }
    console.log(numbers);
    return numbers;
  }
}

module.exports = AnswerGenerator;