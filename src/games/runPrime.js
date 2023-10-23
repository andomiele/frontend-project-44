import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const calculation = (num) => {
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

const runPrime = () => {
  const num = getRandomNumber(0, 10);
  const correctNum = calculation(num);
  const question = (`${num}`);
  const answer = correctNum;
  return [question, answer];
};
export default () => runGame(description, runPrime);
