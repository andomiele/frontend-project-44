import getRandomNumber from '../utils.js';
import getTask from '../index.js';

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

const getGameRounds = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const question = (`${num1} ${num2}`);
  const answerNum = getGcd(num1, num2);
  const answer = answerNum.toString();
  return [question, answer];
};

const runGcd = () => {
  getTask(description, getGameRounds)
};
export default runGcd;
