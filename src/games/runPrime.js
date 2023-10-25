import getRandomNumber from '../utils.js';
import getTask from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const calculate = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameRounds = () => {
  const num = getRandomNumber(0, 10);
  const correctNum = calculate(num);
  const question = (`${num}`);
  const answer = correctNum;
  return [question, answer];
};

const runPrime = () => {
  getTask(description, getGameRounds)
};
export default runPrime;
