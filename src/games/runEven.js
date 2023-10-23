import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => {
  const num = getRandomNumber(0, 10);
  const question = num;
  const isEven = (number) => number % 2 === 0;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(description, runEven);
