
class CompareNumber {
  static comparedResult(answer, inputNums) {
    const inputs = inputNums.split('');
    const answers = answer.split('');

    const rightDigitCount = inputs.filter(c => answers.includes(c)).length;
    const countOfA = inputs.filter(c => answers.indexOf(c) === inputs.indexOf(c)).length;
    const countOfB = rightDigitCount - countOfA;

    return `${countOfA}A${countOfB}B`;
  }
}

module.exports = CompareNumber;