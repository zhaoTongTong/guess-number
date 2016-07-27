
class CompareNumber {
  static comparedResult(answer, inputNums) {
    const numberOfB = inputNums.split('').map((item, index) => {
      return (answer[index] !== item && answer.split('')
          .find(element => element === item)? 1 : 0);
    }).reduce((a, b) => a+b);

    const numberOfA = inputNums.split('').map((item, index, array) => {
      return array.lastIndexOf(item) === index ? 1 : 0;
    }).reduce((a, b) => a+b);

    return `${numberOfA}A${numberOfB}B`;
  }
}

module.exports = CompareNumber;