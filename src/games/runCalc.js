import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

export const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
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

const getRandomSign = () => {
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomSign = operators[randomIndex];
  return randomSign;
};

const getGameRound = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const operator = getRandomSign();
  const question = (`${num1} ${operator} ${num2}`);
  const answer = calculate(num1, num2, operator).toString();
  return [question, answer];
};

const runCalc = () => {
  runGame(description, getGameRound);
};
export default runCalc;
