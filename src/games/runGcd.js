import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) {
    return getGcd(y, x);
  }
  if (y === 0) {
    return x;
  }
  return getGcd(y, x % y);
};

const runGcd = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const question = (`${num1} ${num2}`);
  const answer = getGcd(num1, num2);
  return [question, answer];
};
export default () => runGame(description, runGcd);
