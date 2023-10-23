import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unkown order state: '${operator}'!`);
  }
};

const runCalc = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const index = getRandomNumber(0, 2);
  const operators = ['+', '-', '*'];
  const operator = operators[index];
  const question = (`${num1} ${operator} ${num2}`);
  const answer = calculation(num1, num2, operator);
  return [question, answer];
};

export default () => runGame(description, runCalc);
